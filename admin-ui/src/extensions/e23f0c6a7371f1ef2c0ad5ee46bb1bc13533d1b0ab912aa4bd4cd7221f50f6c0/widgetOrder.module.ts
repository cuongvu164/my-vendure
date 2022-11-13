import { NgModule } from '@angular/core';
import { registerDashboardWidget, setDashboardWidgetLayout } from '@vendure/admin-ui/core';
import { SharedModule } from '@vendure/admin-ui/core';
import { OrdersWidgetComponent } from './components/WidgetOrder/widgetOrder.component'

@NgModule({
  // imports: [SharedModule],
  // declarations: [OrdersWidgetComponent],
  providers: [
    registerDashboardWidget('orders-widget', {
      title: 'Latest reviews',
      supportedWidths: [4, 6, 8, 12],
      loadComponent: () =>
        import('./components/WidgetOrder/widgetOrder.component').then(
          m => m.OrdersWidgetComponent,
        ),
    }),
    setDashboardWidgetLayout([
      { id: 'welcome', width: 12 },
      { id: 'orderSummary', width: 4 },
      { id: 'latestOrders', width: 8 },
      { id: 'reviews', width: 6 },
    ])
  ],
})
export class OrdersWidgetModule { }