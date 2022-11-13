import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@vendure/admin-ui/core';
import { OrdersWidgetComponent } from './components/WidgetOrder/widgetOrder.component';
// import Test from '../react-app/src/components/test'

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: OrdersWidgetComponent,
      data: { breadcrumb: 'Orders' },
    }]),
  ],
  declarations: [OrdersWidgetComponent],
})
export class OrdersModule {}