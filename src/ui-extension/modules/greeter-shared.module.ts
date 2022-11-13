import { NgModule } from '@angular/core';
import { SharedModule, addNavMenuSection } from '@vendure/admin-ui/core';

@NgModule({
  imports: [SharedModule],
  providers: [
    addNavMenuSection({
      id: 'menu-section',
      label: 'My Extensions',
      items: [
        {
          id: 'greeter',
          label: 'Greeter',
          routerLink: ['/extensions/greet'],
          icon: 'cursor-hand-open',
        },
        {
          id: 'react-ui',
          label: 'React App',
          routerLink: ['/extensions/react-ui'],
          // Icon can be any of https://clarity.design/icons
          icon: 'atom',
        },
        {
          id: 'react-uiii',
          label: 'React App2',
          routerLink: ['/extensions/react-uii'],
          // Icon can be any of https://clarity.design/icons
          icon: 'atom',
        }
      ],
    },
      // Add this section before the "settings" section
      'settings'),
  ]
})
export class GreeterSharedModule { }