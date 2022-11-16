import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { FieldOverrideSortResolver } from './sortPriceBetween.resolver'

import gql from 'graphql-tag';

import { schemaSortResult } from './schema'

@VendurePlugin({
  imports: [PluginCommonModule],
  adminApiExtensions: {
    schema: schemaSortResult,
    resolvers: [FieldOverrideSortResolver]
  }
})
export class SortPlugin { }