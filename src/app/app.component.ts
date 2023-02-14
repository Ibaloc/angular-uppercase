import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular Exercise';
  result = '';
  alpha = 'ABC';
  beta = 'yxz';

  ngOnInit() {
    var alpha = this.alpha;
    var beta = this.beta;

    for (let i = 0; i < alpha.length; i++) {
      for (let j = 0; j < beta.length; j++) {
        this.result = this.result + '"' + alpha[i] + beta[j] + '"' + ', ';
      }
    }
  }
}
