import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule, CardModule, GridModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';



import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditdoctorComponent } from './editdoctor/editdoctor.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { DepartmentComponent } from './department/department.component';
import { DoctorComponent } from './doctor/doctor.component';

@NgModule({
  declarations: [ChartsComponent, EditdoctorComponent, SpecializationComponent, DepartmentComponent, DoctorComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    ChartjsModule,
    CardModule,
    GridModule,
    BadgeModule,
    DocsComponentsModule,
    ReactiveFormsModule,
 
  ]
})
export class ChartsModule {
}
