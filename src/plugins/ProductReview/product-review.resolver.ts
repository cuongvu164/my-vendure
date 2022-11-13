// import { Options } from './schema';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { Allow, Ctx, PaginatedList, Permission, ProductService, RequestContext } from '@vendure/core'
import { ProductReviewService } from './product-review.service';

import { ProductReview } from './product-review.entity'

@Resolver()
export class ProductReviewResolver {

  constructor(private productReviewService: ProductReviewService, private productService: ProductService) { }

  @Query()
  @Allow(Permission.ReadCatalog)
  getReviewsProduct(@Ctx() ctx: RequestContext, @Args() args: { id: string }): Promise<ProductReview | undefined> {
    return this.productReviewService.findOne(ctx, args.id)
  }

  @Query()
  @Allow(Permission.ReadCatalog)
  getAllReviewsProduct(@Ctx() ctx: RequestContext, @Args() args: { options: any }): Promise<PaginatedList<ProductReview>> {
    return this.productReviewService.findAll(ctx, args.options || undefined)
  }

  @Mutation()
  @Allow(Permission.SuperAdmin)
  addReviewProduct(@Ctx() ctx: RequestContext, @Args() args: any): Promise<ProductReview | undefined> {
    return this.productReviewService.create(ctx, args.input)
  }

}