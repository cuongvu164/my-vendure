import gql from 'graphql-tag';
import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { TopSellersService } from './top-sellers.service'
import { TopSellersResolver } from './top-sellers.resolver'

const schemaExtension = gql`
  extend type Query {
    topSellers(id: ID!, slug: String): Product
  }
`

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [TopSellersService],
  adminApiExtensions: {
    schema: schemaExtension,
    resolvers: [TopSellersResolver]
  }
})
export class TopSellersPlugin { }