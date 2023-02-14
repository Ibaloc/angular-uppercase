import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular Exercise';
  result = '';
}

var alpha = 'ABC';
var beta = 'yxz';
var result = '';

for (let i = 0; i < alpha.length; i++) {
  for (let j = 0; j < beta.length; j++) {
    result = result + '"' + alpha[i] + beta[j] + '"' + ', ';
  }
}
try {
  document.getElementById('lblresult').innerHTML = result.substring(
    0,
    result.length - 2
  );
} catch {}
