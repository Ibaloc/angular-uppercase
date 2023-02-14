import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular Exercise';
  author = 'Moe Q.';
  result = '';
  alpha = 'ABC';
  beta = 'yxz';
  final = '';

  ngOnInit() {
    var alpha = this.alpha;
    var beta = this.beta;

    for (let i = 0; i < alpha.length; i++) {
      for (let j = 0; j < beta.length; j++) {
        this.final = this.final + '"' + alpha[i] + beta[j] + '"' + ', ';
      }
    }

    this.result = this.final.substring(0, this.final.length - 2);
  }
}
