import { Component } from '@angular/core';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'create-angular-app';
  faPen = faPen;
  faTimes = faTimes;
}
