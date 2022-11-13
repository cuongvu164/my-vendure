import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { ProductReviewResolver } from './product-review.resolver';
import { ProductReviewService } from './product-review.service';
import { ProductReview } from './product-review.entity';
import { schemaExtensions } from './schema';

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [ProductReviewService],
  shopApiExtensions: {
    schema: schemaExtensions,
    resolvers: [ProductReviewResolver]
  },
  entities: [ProductReview],  
})
export class ReviewsPlugin {}