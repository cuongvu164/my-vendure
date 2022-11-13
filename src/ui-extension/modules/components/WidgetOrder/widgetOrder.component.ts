import { gql } from 'graphql-tag';
import { Component, NgModule, OnInit } from '@angular/core';
import { DataService, SharedModule } from '@vendure/admin-ui/core';
import { Observable } from 'rxjs';

// @Component({
//   selector: 'orders-widget',
//   template: `
//   <div>
//     hello
//   </div>
//   `,
// })
// // <ul>
// //       <li *ngFor="let review of pendingReviews$ | async">
// //         <a [routerLink]="['/extensions', 'product-reviews', review.id]">{{ review.summary }}</a>
// //         <span class="rating">{{ review.rating }} / 5</span>
// //       </li>
// //     </ul>
// export class OrdersWidgetComponent implements OnInit {
//   pendingOrders$: Observable<GetAllOrders.Items[]>;

//   constructor(private dataService: DataService) { }

//   ngOnInit() {
//     this.pendingOrders$ = this.dataService.query(gql`
//       query GetAllOrders($options: OrderListOptions) {
//         orders(options: $options) {
//           items {
//             id
//             createdAt
//             code
//             state
//             orderPlacedAt
//             totalQuantity
//           }
//         }
//       }`, {
//       options: {
//         take: 10,
//       },
//     })
//       .mapStream(data => data.orders.items);
//   }
// }

@Component({
  selector: 'orders-widget',
  template: `<h1>{{ order }}</h1>`,
})
export class OrdersWidgetComponent {
  order = 'ORDER!!!!asdasdasdasdasd';
}

@NgModule({
  imports: [SharedModule],
  declarations: [OrdersWidgetComponent],
})
export class OrdersWidgetModule { }