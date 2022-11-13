import gql from 'graphql-tag';
import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { ProductVariantEntityResolver } from './product-variant.resolver'

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: gql`
      extend type ProductVariant {
        availability: String!
      }`,
    resolvers: [ProductVariantEntityResolver]
  }
})
export class AvailabilityPlugin {}