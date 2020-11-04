import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DisplayEmployeeComponent } from './Employees/display-employee.component';
import { EmployeeListComponent } from './Employees/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeService } from './Employees/employee.service';
import { FormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './Employees/create-employee.component';
import { EmployeeDetailsComponent } from './Employees/employee-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    ClipboardModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
