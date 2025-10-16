import { Component } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [EmployeeListComponent, AddEmployeeComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {

}
