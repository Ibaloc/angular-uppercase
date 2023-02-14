import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UppercaseDirective } from './uppercase.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, UppercaseDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
