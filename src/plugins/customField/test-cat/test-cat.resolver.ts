import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, ProductService, 
    RequestContext } from '@vendure/core';
import { Permission } from '@vendure/common/lib/generated-types';
import { CatFetcher } from './test-cat.service';

@Resolver()
export class RandomCatResolver {
  constructor(private productService: ProductService, 
              private catFetcher: CatFetcher) {}

  @Mutation()
  @Allow(Permission.UpdateCatalog)
  async addRandomCat(@Ctx() ctx: RequestContext, @Args() args:any) {
    const catImageUrl = await this.catFetcher.fetchCat();
    console.log('ctx', ctx)
    return this.productService.update(ctx, {
      id: args.id,
      customFields: { catImageUrl },
    });
  }
}