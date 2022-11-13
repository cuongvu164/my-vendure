import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Ctx, RequestContext, Product } from '@vendure/core';

@Resolver('Product')
export class FieldOverrideExampleResolver {
  
  @ResolveField()
  description(@Ctx() ctx: RequestContext, @Parent() product: Product) {
    return this.wrapInFormatting(ctx, product.id);
  }
  
  private wrapInFormatting(ctx: RequestContext, id: any): any {
    console.log('override', id);
  }
}