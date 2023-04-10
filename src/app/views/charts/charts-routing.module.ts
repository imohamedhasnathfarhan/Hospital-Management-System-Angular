import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartsComponent } from './charts.component';
import {EditdoctorComponent} from './editdoctor/editdoctor.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { DepartmentComponent } from './department/department.component';
import { DoctorComponent } from './doctor/doctor.component';


  const newLocal = 'profile';
  const routes: Routes = [
    {
  
    path: '',
   
    data: {
      title: '',
    
    },
    children: [
      {
        path: '',
        
        pathMatch: 'full',
        redirectTo: newLocal
      },
      {
        path: 'adddoctor',
        component: ChartsComponent,
        data: {
          title: 'Add Doctor'
        }
      },
      {
        path: 'specialization',
        component: SpecializationComponent,
        data: {
          title: 'Specialization'
        }
      },

      {
        path: 'department',
        component: DepartmentComponent,
        data: {
          title: 'Department'
        }
      },

      {
        path: 'editdoctor',
        component: EditdoctorComponent,
        data: {
          title: 'Edit Doctor'
        }
      },

      {
        path: 'listdoctor',
        component: DoctorComponent,
        data: {
          title: 'List Doctor'
        }
      }
    ]
  }
  ];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}

