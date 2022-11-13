import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@vendure/admin-ui/core';
import { ProductReviewComponent } from './productReview.component';
// import Test from '../react-app/src/components/test'

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: ProductReviewComponent,
      data: { breadcrumb: 'ProductReview' },
    }]),
  ],
  declarations: [ProductReviewComponent],
})
export class ProductReviewModule {}