import { Component, ElementRef, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular Exercise ' + VERSION.full;
  author = '>> Moe Q. <<';
  result = '';
  alpha = 'ABC';
  beta = 'yxz';
  final = '';
  enterednumber = '2';
  checkIsPEO = '';

  ngOnInit() {
    this.JavaSciptRandom();
  }

  JavaSciptRandom() {
    var alpha = this.alpha;
    var beta = this.beta;

    for (let i = 0; i < alpha.length; i++) {
      for (let j = 0; j < beta.length; j++) {
        this.final = this.final + '"' + alpha[i] + beta[j] + '"' + ', ';
      }
    }

    this.result = this.final.substring(0, this.final.length - 2);
  }

  isPrimeEvenOdd(number) {
    var result = '';
    if (number <= 1) result = 'Not Prime';
    if (number == 2) result = 'Prime';
    if (number % 2 == 0) {
      result = result + '/Even';
    } else {
      result = result + '/Odd';
    }

    this.checkIsPEO = result;
  }

  checkValue(event) {
    this.isPrimeEvenOdd(this.enterednumber);
  }
}
