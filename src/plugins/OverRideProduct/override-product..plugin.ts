import gql from 'graphql-tag';
import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { FieldOverrideExampleResolver } from './override-product.resolver'

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    resolvers: [FieldOverrideExampleResolver]
  }
})
export class OverRideProductPlugin {}