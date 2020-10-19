import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

// this serice provides data to components
@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
          id: 1,
          name: 'Andy',
          email: 'andy@gmail.com',
          role: 'Admin',
          team: 'HR',
          address: 'Auckland',
          photoPath: 'assets/images/andy.png'
        },
        {
          id: 2,
          name: 'Donna',
          email: 'donna@gmail.com',
          role: 'Employee',
          team: 'HR',
          address: 'Auckland',
          photoPath: 'assets/images/donna.png'
        },
        {
          id: 3,
          name: 'Jack',
          email: 'jack@gmail.com',
          role: 'Admin',
          team: 'HR',
          address: 'Auckland',
          photoPath: 'assets/images/jack.png'
        },
        {
          id: 4,
          name: 'Mary',
          email: 'mary@gmail.com',
          role: 'Admin',
          team: 'HR',
          address: 'Auckland',
          photoPath: 'assets/images/mary.png'
        },
        {
          id: 5,
          name: 'Victoria',
          email: 'victoria@gmail.com',
          role: 'Employee',
          team: 'HR',
          address: 'Auckland',
          photoPath: 'assets/images/victoria.png'
        }
      ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }
   
  save(employee: Employee) {
    if (employee.id === null) {
      // reduce() method reduces the array to a single value. This method executes
      // the provided function for each element of the array (from left-to-right)
      // When we implement the server side service to save data to the database
      // table, we do not have to compute the id, as the server will assing it
      const maxId = this.listEmployees.reduce(function (e1, e2) {
        return (e1.id > e2.id) ? e1 : e2;
      }).id;
      employee.id = maxId + 1;
  
      this.listEmployees.push(employee);
    } else {
      const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
      this.listEmployees[foundIndex] = employee;
    }
    return employee.id
  }

  getEmployee(id: number) {
    return this.listEmployees.filter(x=>x.id == id)[0];
}

deleteEmployee(id: number) {
  const i = this.listEmployees.findIndex(e => e.id === id);
  if (i !== -1) {
    this.listEmployees.splice(i, 1);
  }
}

}