import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [EmployeeListComponent, AddEmployeeComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent implements OnInit{

  @ViewChild('addEmployeeComp') addEmployeeComp!: AddEmployeeComponent;

  employeeList: any = []
  searchTerm: string = '';
  filterDept: string = '';
  sortBy: string = '';
  searchTimeout: any;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.handleGetEmployee()
  }

  handleGetEmployee() {
    let data = this.dashboardService.getEmployeeList()
    if (this.searchTerm) {
      data = data.filter((emp: any) =>
        emp.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        emp.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.filterDept) {
      data = data.filter((emp: any) => emp.department === this.filterDept);
    }

    if (this.sortBy) {
      data.sort((a: any, b: any) => {
        if (this.sortBy === 'Name') return a.name.localeCompare(b.name);
        if (this.sortBy === 'Date of joining') {
          const dateA = new Date(a.dateOfJoining.split('-').reverse().join('-'));
          const dateB = new Date(b.dateOfJoining.split('-').reverse().join('-'));
          return dateA.getTime() - dateB.getTime();
        }
        return 0;
      });
    }

    this.employeeList = data;
  }

  handleEditEmployee(employee: any) {
    this.addEmployeeComp.populateFormForEdit(employee);
  }

  onSearchChange(event: any) {
    const value = event.target.value;
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.searchTerm = value;
      this.handleGetEmployee();
    }, 500)
  }

  onFilterChange(event: any) {
    this.filterDept = event.target.value;
    this.handleGetEmployee();
  }

  onSortChange(event: any) {
    this.sortBy = event.target.value;
    this.handleGetEmployee();
  }

}
