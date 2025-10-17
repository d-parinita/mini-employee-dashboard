import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getEmployeeList() {
    if (typeof window !== 'undefined') {
      const data = JSON.parse(localStorage.getItem('employees') || '[]')
      return data
    }
  }

  addNewEmployee(payload: any) {
    const existing = localStorage.getItem('employees');
    const employees = existing ? JSON.parse(existing) : [];
    employees.push(payload);
    const data = localStorage.setItem('employees', JSON.stringify(employees))
    return data
  }

  editEmployee(updatedEmployee: any) {
    const employees = JSON.parse(localStorage.getItem('employees') || '[]');
    const index = employees.findIndex((e: any) => e.id === updatedEmployee.id);
    if (index !== -1) {
      employees[index] = updatedEmployee;
      const data = localStorage.setItem('employees', JSON.stringify(employees));
      return data
    }
  }

  deleteEmployee(id: any) {
    const existing = localStorage.getItem('employees');
    let employees = existing ? JSON.parse(existing) : [];
    employees = employees.filter((emp: any) => emp.id !== id);
    const data = localStorage.setItem('employees', JSON.stringify(employees));
    return data;
  }

}
