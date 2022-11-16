import {
  dummyPaymentHandler,
  DefaultJobQueuePlugin,
  DefaultSearchPlugin,
  VendureConfig,
  LanguageCode,
  Asset,
} from '@vendure/core';
import { defaultEmailHandlers, EmailPlugin } from '@vendure/email-plugin';
import { AssetServerPlugin } from '@vendure/asset-server-plugin';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import { compileUiExtensions } from '@vendure/ui-devkit/compiler';
import 'dotenv/config';
import path from 'path';
import { RandomCatPlugin } from './plugins/customField/test-cat/test-cat.module';
import { ReviewsPlugin } from './plugins/ProductReview/product-review.plugin';
import { TopSellersPlugin } from './plugins/TopSeller/top-sellers.plugin';
import { AvailabilityPlugin } from './plugins/ProductVariant/product-variant.plugin';
import { OverRideProductPlugin } from './plugins/OverRideProduct/override-product..plugin';
import { SortPlugin } from './plugins/OverrideSortParameter/sortPriceBetween.plugin';

const IS_DEV = process.env.APP_ENV === 'dev';

export const config: VendureConfig = {
  apiOptions: {
    port: 3000,
    adminApiPath: 'admin-api',
    shopApiPath: 'shop-api',
    // The following options are useful in development mode,
    // but are best turned off for production for security
    // reasons.
    ...(IS_DEV ? {
      adminApiPlayground: {
        settings: { 'request.credentials': 'include' } as any,
      },
      adminApiDebug: true,
      shopApiPlayground: {
        settings: { 'request.credentials': 'include' } as any,
      },
      shopApiDebug: true,
    } : {}),
  },
  authOptions: {
    tokenMethod: ['bearer', 'cookie'],
    superadminCredentials: {
      identifier: process.env.SUPERADMIN_USERNAME,
      password: process.env.SUPERADMIN_PASSWORD,
    },
    cookieOptions: {
      secret: process.env.COOKIE_SECRET,
    },
  },
  dbConnectionOptions: {
    type: 'better-sqlite3',
    // See the README.md "Migrations" section for an explanation of
    // the `synchronize` and `migrations` options.
    synchronize: false,
    migrations: [path.join(__dirname, './migrations/*.+(js|ts)')],
    logging: false,
    database: path.join(__dirname, '../vendure.sqlite'),
  },
  paymentOptions: {
    paymentMethodHandlers: [dummyPaymentHandler],
  },
  // When adding or altering custom field definitions, the database will
  // need to be updated. See the "Migrations" section in README.md.
  customFields: {
    Customer: [
      { name: 'avatar', type: 'relation', entity: Asset }
    ],
    ProductVariant: [
      { 
        name: 'rrp',
        type: 'int', 
        ui: { component: 'currency-form-input' },
      },
    ],
    Product : [
      { name: 'additionalInfo', type: 'text', ui: { component: 'rich-text-form-input' } },
      { name: 'specs', type: 'text', ui: { component: 'json-editor-form-input' } },
      { name: 'width', type: 'int', ui: { tab: 'Shipping' } },
      { name: 'height', type: 'int', ui: { tab: 'Shipping' } },
      { name: 'depth', type: 'int', ui: { tab: 'Shipping' } },
      { name: 'weight', type: 'int', ui: { tab: 'Shipping' } },
    ],
    OrderLine: [
      {
        name: 'engravingText',
        type: 'string',
        label: [
          {
            languageCode: LanguageCode.en,
            value: 'The text to engrave on the product' 
          },
        ],
      },
    ]
  },
  
  plugins: [
    RandomCatPlugin,
    TopSellersPlugin,
    AvailabilityPlugin,
    OverRideProductPlugin,
    ReviewsPlugin,
    AssetServerPlugin.init({
      route: 'assets',
      assetUploadDir: path.join(__dirname, '../static/assets'),
      // For local dev, the correct value for assetUrlPrefix should
      // be guessed correctly, but for production it will usually need
      // to be set manually to match your production url.
      assetUrlPrefix: IS_DEV ? undefined : 'https://www.my-shop.com/assets',
    }),
    DefaultJobQueuePlugin.init({ useDatabaseForBuffer: true }),
    DefaultSearchPlugin.init({ bufferUpdates: false, indexStockStatus: true }),
    SortPlugin,
    EmailPlugin.init({
      devMode: true,
      outputPath: path.join(__dirname, '../static/email/test-emails'),
      route: 'mailbox',
      handlers: defaultEmailHandlers,
      templatePath: path.join(__dirname, '../static/email/templates'),
      globalTemplateVars: {
        // The following variables will change depending on your storefront implementation.
        // Here we are assuming a storefront running at http://localhost:8080.
        fromAddress: '"example" <noreply@example.com>',
        verifyEmailAddressUrl: 'http://localhost:8080/verify',
        passwordResetUrl: 'http://localhost:8080/password-reset',
        changeEmailAddressUrl: 'http://localhost:8080/verify-email-address-change'
      },
    }),
    AdminUiPlugin.init({
      route: 'admin',
      port: 3002,
      app: compileUiExtensions({
        outputPath: path.join(__dirname, '../admin-ui'),
        extensions: [{
          // Points to the path containing our Angular "glue code" module
          extensionPath: path.join(__dirname, 'ui-extension/modules'),
          ngModules: [
            {
              type: 'lazy',
              route: 'react-ui',
              ngModuleFileName: 'react-extension.module.ts',
              ngModuleName: 'ReactUiExtensionModule',
            },
            {
              type: 'shared',
              ngModuleFileName: 'widgetOrder.module.ts',
              ngModuleName: 'OrdersWidgetModule',
            },
            {
              type: 'lazy',
              route: 'catalog/product',
              ngModuleFileName: 'product-review.module.ts',
              ngModuleName: 'SharedExtensionModule',
            },
            {
              type: 'lazy',
              route: 'greet',
              ngModuleFileName: 'greeter.module.ts',
              ngModuleName: 'GreeterModule',
            }
          ],
          staticAssets: [
            { path: path.join(__dirname, 'ui-extension/react-app/build'), rename: 'react-app' },
          ],
        }],
        devMode: true,
      }),
      adminUiConfig:{
        defaultLanguage: LanguageCode.en,
        availableLanguages: [LanguageCode.en, LanguageCode.de, LanguageCode.vi, LanguageCode.fr],
      }
    }),
  ],
  
};
