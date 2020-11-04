import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  showDetailsFlag = false;
  //use this field to save hostname from document object
  private host;
  currentUrl :string;



  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(@Inject(DOCUMENT) private document, private _employeeService: EmployeeService, private _router: Router,private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this._route.paramMap.subscribe(parameterMap => {
    this.host = document.location.origin;
    //console.log(document.location);
    this.currentUrl =  this.host + this._router.url;
  });
  }

  //delete employee
  deleteEmployee() {
    this._employeeService.deleteEmployee(this.employee.id);
    this.confirmDeleteFlag = false;
    // this.notify.emit(this.showDetails);
    this._router.navigate(['list']);
  }

  //edit employee and notify parent
  editEmployee() {
    this.showDetailsFlag = false;
    this.notify.emit(this.showDetailsFlag);
  }
}
