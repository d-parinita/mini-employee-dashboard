import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {

  rows = [
    { slNo: 1, name: 'John Doe', email: 'john@gmail.com', department: 'HR', dateOfJoining: '19-07-2022' },
    { slNo: 2, name: 'Jane Smith', email: 'jane@yahoo.com',  department: 'Engineering', dateOfJoining: '15-11-2024' },
    { slNo: 3, name: 'Robert Brown', email: 'robert@outlook.com',  department: 'Management', dateOfJoining: '24-03-2021' },
  ];

  columns = [
    { prop: 'slNo', name: 'Sl No.' },
    { prop: 'name', name: 'Name' },
    { prop: 'email', name: 'Email' },
    { prop: 'department', name: 'Department' },
    { prop: 'dateofJoining', name: 'Date of joining' },
    { prop: 'actions', name: 'Actions' },
  ];

}
