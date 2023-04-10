import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
import { CompanyComponent } from './company/company.component';

const newLocal = 'profile';
const routes: Routes = [
  {
//     path: '',
//     component: WidgetsComponent,
//     // component: CompanyComponent,
    
//     data: {
//       title: 'system'
//     },
//     children: [
//       {
//         path: '',
//         pathMatch:'full',
//         redirectTo:'profile'
//       },
//         path: 'profile',
//         component: WidgetsComponent,
//         data: {
//           title: 'profile',
//         },
//       },
//       // {
//       //   path: '',
//       //   component: CompanyComponent,
//       //   data: {
//       //     title: 'Company',
//       //   },
//       // },
//     ]
//   }
// ];

  path: '',
  data: {
    title: 'System'
  },
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: newLocal
    },
    {
      path: 'profile',
      component: WidgetsComponent,
      data: {
        title: 'Profile'
      }
    },
    {
      path: 'company',
      component: CompanyComponent,
      data: {
        title: 'Company'
      }
    }
  ]
}
];





@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule {
}
