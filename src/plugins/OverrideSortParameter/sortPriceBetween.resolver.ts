// import { DataService } from '@vendure/admin-ui/core';
import { Parent, ResolveField, Resolver, Args, Query } from '@nestjs/graphql';
import { Ctx, RequestContext, ProductVariant, TransactionalConnection } from '@vendure/core';

@Resolver()
export class FieldOverrideSortResolver {
  constructor(private connection: TransactionalConnection) { }

  @ResolveField()
  async priceBetween(@Ctx() ctx: RequestContext, @Args() args: any) {
    console.log('connection------', args) 

    return this.getPriceBetween(ctx, args);
  }

  private async getPriceBetween(ctx: RequestContext, args: any): Promise<any> {
    console.log('connection------', args)    

    return '1'
  }

}