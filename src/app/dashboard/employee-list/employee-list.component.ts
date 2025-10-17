import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor, ConfirmationModalComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent{

  @Input() employeeLists: any = []
  @Output() editEmployeeEvent = new EventEmitter<any>();
  @Output() refreshList = new EventEmitter<void>();
  @Output() deleteEmployee = new EventEmitter<any>()
  @ViewChild('deleteModalComp') deleteModalComp!: ConfirmationModalComponent;

  selectedEmployeeId: string | null = null;

  columns = [
    { prop: 'id', name: 'Id' },
    { prop: 'name', name: 'Name' },
    { prop: 'email', name: 'Email' },
    { prop: 'department', name: 'Department' },
    { prop: 'dateofJoining', name: 'Date of joining' },
    { prop: 'actions', name: 'Actions' },
  ];

  constructor(
    private dashboardService: DashboardService
  ) { }

  handleEditemployee(employee: any) {
    this.editEmployeeEvent.emit(employee); 
  }

  openDeleteModal(id: any) {
    this.selectedEmployeeId = id;
    this.deleteModalComp.openModal();
  }

  handleDelete() {
    if (this.selectedEmployeeId) {
      this.dashboardService.deleteEmployee(this.selectedEmployeeId);
      this.selectedEmployeeId = null;
      this.refreshList.emit(); 
    }
  }

}
