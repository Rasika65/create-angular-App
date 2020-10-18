import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DisplayEmployeeComponent } from './Employees/display-employee.component';
import { EmployeeListComponent } from './Employees/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeService } from './Employees/employee.service';
import { FormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './Employees/create-employee.component';
import { EmployeeDetailsComponent } from './Employees/employee-details.component';


const appRoutes: Routes = [
  {
    path: 'list',
    component: EmployeeListComponent
  },
  {
    path: 'list/:id',
    component: EmployeeListComponent
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayEmployeeComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
