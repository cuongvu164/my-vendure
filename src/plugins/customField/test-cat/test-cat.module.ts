import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import gql from 'graphql-tag';
import { RandomCatResolver } from './test-cat.resolver';
import { CatFetcher } from './test-cat.service';

const schemaExtension = gql`
    extend type Mutation {
        addRandomCat(id: ID!): Product!
    }
`;

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [CatFetcher],
  adminApiExtensions: {
    schema: schemaExtension,
    resolvers: [RandomCatResolver],
  },
  configuration: config => {
    config.customFields.Product.push({
      type: 'string',
      name: 'catImageUrl',
    });
    return config;
  }
})

export class RandomCatPlugin {}
