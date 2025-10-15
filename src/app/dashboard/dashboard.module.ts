import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: DashboardLayoutComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ],
  providers: [],
  exports: [RouterModule]
})
export class DashboardModule { }
