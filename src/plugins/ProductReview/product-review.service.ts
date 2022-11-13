// import { Options } from './schema';

import { Inject, Injectable } from '@nestjs/common';
import { ListQueryBuilder, PaginatedList, RequestContext, TransactionalConnection } from '@vendure/core';

import { ProductReview } from './product-review.entity'

@Injectable()
export class ProductReviewService {
  constructor(
    private connection: TransactionalConnection,
    private listQueryBuilder: ListQueryBuilder,
  ) { }

  async findAll(ctx: RequestContext, options?: any): Promise<PaginatedList<ProductReview>> {
    return this.listQueryBuilder
      .build(ProductReview, options, { ctx })
      .getManyAndCount()
      .then(([items, totalItems]) => ({
          items, totalItems
        }))
  }

  async findOne(ctx: RequestContext, id: string): Promise<ProductReview | undefined> {
    return this.connection.getRepository(ctx, ProductReview).findOne(id);
  }

  async create(ctx: RequestContext, input: any): Promise<ProductReview> {
    return this.connection.getRepository(ctx, ProductReview).save(new ProductReview(input))
  }
}
