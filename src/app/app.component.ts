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
  enterednumber = '0';
  checkIsPEO = '';
  numberpalindrome = '11';
  checkIsPalindrome = '';

  ngOnInit() {
    this.JavaSciptRandom();
    this.isPalidrome(101);
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
    var limit = Math.floor(Math.sqrt(number));
    for (let i = 2; i <= limit; ++i) {
      if (number % i == 0) {
        result = 'Not Prime';
      } else {
        result = 'Prime';
      }
    }
    if (number % 2 == 0) {
      result = result + '/Even';
    } else {
      result = result + '/Odd';
    }

    this.checkIsPEO = result;
  }

  clearValue() {
    this.enterednumber = '0';
    this.checkIsPEO = '';
  }

  checkValue(event) {
    this.isPrimeEvenOdd(this.enterednumber);
  }

  checkPalindrome() {
    alert(this.isPalidrome(this.numberpalindrome));
  }

  isPalidrome(input) {
    if (input.length == 1 || (input.length == 2 && input[0] == input[1])) {
      return 'Yes';
    } else if (input.length > 1) {
      if (input[0] != input[input.length - 1]) {
        return 'No';
      } else {
        //return isPalindrome(input.substring(1, input.length - 2));
        return 'A';
      }
    }
    return 'No';
  }
}
