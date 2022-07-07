import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  // inputType = 'text';

  //DATA BINDING
  user = {
    name: 'Tam',
    age: 18,
  };

  // EVENT BINDING
  handler(event) {
    console.log(event, 'click');
  }
}
