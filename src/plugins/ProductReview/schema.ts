import gql from 'graphql-tag';

// export interface Options {
//   skip?: number
//   take?: number
//   sort?: string
//   filter?: string
// };

export const schemaExtensions = gql`
type ProductReview implements Node {
  id: ID!
  createdAt: DateTime
  updatedAt: DateTime
  text: String
  rating: Float!
}

type ProductReviewList implements PaginatedList {
  items: [ProductReview!]!
  totalItems: Int!
}

extend type Query {
  getReviewsProduct(id: ID!): ProductReview
}

extend type Query  {
  getAllReviewsProduct(options: Options!) : ProductReviewList
}

input Options {
  skip: Int
  take: Int
  sort: String
  filter: String
}

extend type Mutation {
  addReviewProduct(input: addReviewProduct): ProductReview
}

input addReviewProduct {
  id: ID!,
  text: String
  rating: Float!
}
`