import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() employee: Employee;
   // This property is used in the view template to show and hide
  // delete confirmation
  confirmDeleteFlag = false;

  // This property is used in the view template to show and hide employee details
  showDetailsFlag= false; 


 @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
 
  constructor( private _employeeService: EmployeeService,private _router: Router) { }

  ngOnInit(): void {
  }

  //delete employee
  deleteEmployee()
  {
    this._employeeService.deleteEmployee(this.employee.id);
    this.confirmDeleteFlag = false;
    // this.notify.emit(this.showDetails);
    this._router.navigate(['list']);
  }

  //edit employee and notify parent
  editEmployee()
  {
    this.showDetailsFlag= false;
    this.notify.emit(this.showDetailsFlag);
  }

}
