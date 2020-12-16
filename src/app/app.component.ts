import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name="Abc";
  amount=10;
  e=2.7180;
  birthday = new Date(1988, 3, 15);
}
