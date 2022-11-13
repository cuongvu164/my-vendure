import { Injectable } from '@nestjs/common';
import { RequestContext } from '@vendure/core';

@Injectable()
export class TopSellersService {
  getTopSellers(ctx: RequestContext,id: String, slug: String) {
    console.log('data----------', {id, slug})
    // const response = ctx.res
    return slug
  }
}
