import { Component } from '@angular/core';

@Component({
  selector: 'product-reviews',
  template: `<button>{{ title }}</button>`,
})
export class ProductReviewComponent {
  title = 'Product review';
}