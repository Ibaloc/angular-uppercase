import { Component, ElementRef, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular Exercise Trial (v' + VERSION.full + ')';
  author = '>> Moe Q. <<';
  result = '';
  alpha = 'ABC';
  beta = 'yxz';
  final = '';
  enterednumber = '3';
  checkIsPEO = '';
  checkIsPEO_M = '';
  numberpalindrome = 'daa';
  checkIsPalindrome = '';
  3;
  ngOnInit() {
    this.JavaSciptRandom();
    this.checkIsPalindrome = this.isPalindrome(this.numberpalindrome);
    this.isPrimeEvenOdd(this.enterednumber, 'S');

    this.isPrimeEvenOdd(0, 'M');
    this.isPrimeEvenOdd(1, 'M');
    this.isPrimeEvenOdd(1, 'M');
    this.isPrimeEvenOdd(2, 'M');
    this.isPrimeEvenOdd(3, 'M');
    this.isPrimeEvenOdd(5, 'M');
    this.isPrimeEvenOdd(8, 'M');
    this.isPrimeEvenOdd(9, 'M');
    this.isPrimeEvenOdd(13, 'M');
    this.isPrimeEvenOdd(25, 'M');
    this.isPrimeEvenOdd(38, 'M');
    this.isPrimeEvenOdd(42, 'M');
    this.isPrimeEvenOdd(47, 'M');
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

  isPrimeEvenOdd(number, type) {
    if (number == null) {
      this.checkIsPEO = 'Enter a number';
    } else {
      if (type == 'S') {
        this.checkIsPEO = '';
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
        if (result == '') {
          result = 'Prime';
        }
        if (number % 2 == 0) {
          result = result + '/Even';
        } else {
          result = result + '/Odd';
        }

        this.checkIsPEO = result;
      } else {
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
        if (result == '') {
          result = 'Prime';
        }
        if (number % 2 == 0) {
          result = result + '/Even';
        } else {
          result = result + '/Odd';
        }

        if (result.includes('Not Prime')) {
          this.checkIsPEO_M =
            this.checkIsPEO_M + number + ' - ' + result + ' *<br>';
        } else {
          this.checkIsPEO_M =
            this.checkIsPEO_M + number + ' - ' + result + '<br>';
        }
      }
    }
  }

  clearValue() {
    this.enterednumber = '';
    this.checkIsPEO = '';
  }

  checkValue() {
    this.isPrimeEvenOdd(this.enterednumber, 'S');
  }

  checkPalindrome() {
    this.checkIsPalindrome = this.isPalindrome(this.numberpalindrome);
  }

  isPalindrome(input) {
    if (input != '') {
      if (input.length == 1 || (input.length == 2 && input[0] == input[1])) {
        return '';
      } else if (input.length > 1) {
        if (input[0] != input[input.length - 1]) {
          return 'Not';
        } else {
          return this.isPalindrome(input.substring(1, input.length - 2));
        }
      }
      return 'Not';
    }
  }
}
