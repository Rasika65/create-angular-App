import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  emp: Employee;
  showDetails = true;

  // Use this property to stored filtered employees
  filteredEmployees: Employee[];
  _searchTerm: string;

  // We are binding to this property in the view template for search
  get searchTerm(): string {
    return this._searchTerm;
  }

  // This setter is called everytime the value in the search text box changes
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  constructor(private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute) { }

    
  // get data from employee service
  ngOnInit() {

    this.employees = this._employeeService.getEmployees();
    this.filteredEmployees = this.employees;

    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');

      //check the id parameter and if its zero load the 1 st employee otherwise load the employee with same id as id parameter
      if (id === 0) {   
        this._router.navigate(['list',1]);
      } else if(id===-1)
      {
        this.showDetails= false;
      }
      else{
        this._router.navigate(['list', id]);
        this.emp = Object.assign({}, this._employeeService.getEmployee(id));
      }
      
    });
  }

  //get employee object from list component and pass it to displayEmployeeComponent
  getEmployee(employee: Employee) {
    this.emp = employee;
    this.showDetails = true;
    this._router.navigate(['list', this.emp.id]);
  }

  //handles emmitter event from employee details
  handleNotifyDetails(eventData: boolean) {
    this.showDetails = eventData;
  }

  //handles emmitter event from Create employee component
  handleNotifyCreate(eventData: boolean) {
    this.showDetails = eventData;
  }

//filter employee based on searchString property
  filterEmployees(searchString: string) {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  //showing create panel on create button click
  showCreatePanel() {
    //this.showDetails = false;
    this._router.navigate(['list',-1]);
  }

}
