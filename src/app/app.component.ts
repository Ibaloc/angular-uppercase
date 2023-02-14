import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular Exercise';
}

var alpha = 'ABC';
var beta = 'yxz';
var result = '';

for (let i = 0; i < alpha.length; i++) {
  for (let j = 0; j < beta.length; j++) {
    result = result + '"' + alpha[i] + beta[j] + '"' + ', ';
  }
}
