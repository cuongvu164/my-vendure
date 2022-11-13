import { NgModule } from '@angular/core';
import { SharedModule, addActionBarItem } from '@vendure/admin-ui/core';

@NgModule({
  imports: [SharedModule],
  providers: [
    addActionBarItem({
      id: 'product-reviews',
      label: 'Product reviews',
      locationId: 'product-detail',
      buttonStyle: 'outline',
      buttonColor: 'primary',
      routerLink: route => {
          const id = route.snapshot.params.id;
          return ['./extensions/reviews', id];
      },
    }),
  ],
})
export class SharedExtensionModule {}