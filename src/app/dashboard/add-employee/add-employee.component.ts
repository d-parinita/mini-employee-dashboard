import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { nanoid } from 'nanoid';
import { DashboardService } from '../dashboard.service';
import { DatePipe, NgIf } from '@angular/common';
import { noFutureDate } from '../../custom-validators/no-future-date';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss',
  providers: [DatePipe]
})
export class AddEmployeeComponent {
  
  @Output() getEmployees = new EventEmitter<any>() 
  @ViewChild('employeeModal') employeeModal!: ElementRef<HTMLDialogElement>;

  isEditMode: boolean = false; 
  editEmployeeId: string | null = null; 

  form: any = this.fb.group({
    id: '',
    name: '',
    email: '',
    department: '',
    date: ''
  })

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private datePipe: DatePipe
  ) { 
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      date: ['', [Validators.required, noFutureDate]]
    })
  }

  handleAddEmployee() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.isEditMode && this.editEmployeeId) {
      const payload = {
        id: this.editEmployeeId,
        name: this.form.value.name,
        email: this.form.value.email,
        department: this.form.value.department,
        dateOfJoining: this.datePipe.transform(this.form.value.date, 'dd-MM-yyyy'),
      }
      const updatedEmployee = this.dashboardService.editEmployee(payload);
    } else {
      const payload = {
        id: nanoid(10),
        name: this.form.value.name,
        email: this.form.value.email,
        department: this.form.value.department,
        dateOfJoining: this.datePipe.transform(this.form.value.date, 'dd-MM-yyyy'),
      }
      const newEmployee = this.dashboardService.addNewEmployee(payload)
    }
    this.form.reset()
    this.isEditMode = false;
    this.editEmployeeId = null;
    this.getEmployees.emit()
    this.employeeModal.nativeElement.close()
  }

  populateFormForEdit(employee: any) {
    this.isEditMode = true;
    this.editEmployeeId = employee.id;

    const [day, month, year] = employee.dateOfJoining.split('-');
    const formattedDate = `${year}-${month}-${day}`;

    this.form.patchValue({
      name: employee.name,
      email: employee.email,
      department: employee.department,
      date: formattedDate
    });

    this.employeeModal.nativeElement.showModal();
  }

  get f() {
    return this.form.controls;
  }

}
