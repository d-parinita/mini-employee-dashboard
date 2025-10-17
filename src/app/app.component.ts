import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './dashboard/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {
    const data = [
      { id: 'jbbkEMdcgT', name: 'John Doe', email: 'john@gmail.com', department: 'HR', dateOfJoining: '19-07-2022' },
      { id: 'AtgPnljeTG', name: 'Jane Smith', email: 'jane@yahoo.com',  department: 'Engineering', dateOfJoining: '15-11-2024' },
      { id: 'eThcvOyWmq', name: 'Robert Brown', email: 'robert@outlook.com',  department: 'Marketing', dateOfJoining: '24-03-2021' },
    ]
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(data))
      }
    }
  }

}
