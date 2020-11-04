import { Component,  EventEmitter,  OnInit,  Output,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm', { static: true }) public createEmployeeForm: NgForm;
  employee: Employee;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  flag= true; // This property is used in the view template to show and hide crate panel
  // Include a private field _id to keep track of the route parameter value
  private _id;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  

  constructor(private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute) { }


    //check the id parameter and set form for create or delete accordingly
  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap => {
      this._id = +parameterMap.get('id');  
      this.getEmployee(this._id);
    });
  }

  //for hiding create panel
  hideCreatePanel()
  {
    this.notify.emit(this.flag);
  }

//save employee by calling employee service
  saveEmployee(): void {
    const newEmployee = Object.assign({}, this.employee);
    this._id=this._employeeService.save(newEmployee);
    //this.createEmployeeForm.reset();
    this.hideCreatePanel();    
    this._router.navigate(['list',this._id]);
  }

  
//set employee object for create/edit operation
  private getEmployee(id: number) {
    // If the id is equal to -1 set employee object to null
    if (id === -1) {
      this.employee = {
        id: null,
        name: null,
        email: null,
        role: null,
        team: null,
        address: null,
        photoPath: null
      };
      // Resetting the form, resets any previous validation errors
      this.createEmployeeForm.reset();
    } else {
      this.employee = Object.assign({}, this._employeeService.getEmployee(id));
    }
  }
}
