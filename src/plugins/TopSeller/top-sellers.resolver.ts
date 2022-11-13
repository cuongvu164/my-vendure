import { Args, Query, Resolver } from '@nestjs/graphql';
import { Ctx, RequestContext, ProductService, Allow, Permission } from '@vendure/core'
import { TopSellersService } from './top-sellers.service';

@Resolver()
export class TopSellersResolver {

  constructor(private topSellersService: TopSellersService, private productService: ProductService) { }

  @Query()
  @Allow(Permission.ReadCatalog)
  async topSellers(@Ctx() ctx: RequestContext, @Args() args: any) {
    console.log('resolver', this.topSellersService.getTopSellers(ctx,args.id, args.slug))
    const slug = this.topSellersService.getTopSellers(ctx,args.id, args.slug);
    return await this.productService.findOne(ctx,args.id);
  }


  // @Mutation()
  // @Allow(Permission.UpdateCatalog)
  // async addRandomCat(@Ctx() ctx: RequestContext, @Args() args:any) {
  //   const catImageUrl = await this.catFetcher.fetchCat();
  //   console.log('ctx', ctx)
  //   return this.productService.update(ctx, {
  //     id: args.id,
  //     customFields: { catImageUrl },
  //   });
  // }
}
