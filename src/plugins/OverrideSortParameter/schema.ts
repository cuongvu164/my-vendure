import gql from 'graphql-tag';

export const schemaSortResult = gql`
  extend input SearchResultSortParameter {
    priceBetween: SortBetween!
  }

  input SortBetween {
    from: Int
    to: Int
  }
`
