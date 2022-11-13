import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Ctx, RequestContext, ProductVariant } from '@vendure/core';

@Resolver('ProductVariant')
export class ProductVariantEntityResolver {
  
  @ResolveField()
  availability(@Ctx() ctx: RequestContext, @Parent() variant: ProductVariant) {
    return this.getAvailbilityForVariant(ctx, variant.id);
  }
  
  private getAvailbilityForVariant(ctx: RequestContext, id: any): any {
    return 'out of stock'
    // implementation omitted, but calculates the
    // available salable stock and returns a string
    // such as "in stock", "2 remaining" or "out of stock"
  }
}