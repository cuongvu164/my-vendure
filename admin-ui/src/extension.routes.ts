export const extensionRoutes = [  {
    path: 'extensions/react-ui',
    loadChildren: () => import('./extensions/e23f0c6a7371f1ef2c0ad5ee46bb1bc13533d1b0ab912aa4bd4cd7221f50f6c0/react-extension.module').then(m => m.ReactUiExtensionModule),
  },
  {
    path: 'extensions/catalog/product',
    loadChildren: () => import('./extensions/e23f0c6a7371f1ef2c0ad5ee46bb1bc13533d1b0ab912aa4bd4cd7221f50f6c0/product-review.module').then(m => m.SharedExtensionModule),
  },
  {
    path: 'extensions/greet',
    loadChildren: () => import('./extensions/e23f0c6a7371f1ef2c0ad5ee46bb1bc13533d1b0ab912aa4bd4cd7221f50f6c0/greeter.module').then(m => m.GreeterModule),
  }];
