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
      { id: 1, name: 'John Doe', email: 'john@gmail.com', department: 'HR', dateOfJoining: '19-07-2022' },
      { id: 2, name: 'Jane Smith', email: 'jane@yahoo.com',  department: 'Engineering', dateOfJoining: '15-11-2024' },
      { id: 3, name: 'Robert Brown', email: 'robert@outlook.com',  department: 'Management', dateOfJoining: '24-03-2021' },
    ]
    if (!localStorage.getItem('employees')) {
      localStorage.setItem('employees', JSON.stringify(data))
    }
  }

}
