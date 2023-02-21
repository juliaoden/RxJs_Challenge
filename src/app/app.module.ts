import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TuiRepeatTimesModule } from '@taiga-ui/cdk';

import { AppComponent } from './app.component';
import { Challenge1Component } from './challenge1/challenge1.component';
import { Challenge2Component } from './challenge2/challenge2.component';
import { Challenge4Component } from './challenge4/challenge4.component';
import { Challenge5Component } from './challenge5/challenge5.component';
import { Challenge6Component } from './challenge6/challenge6.component';
import { Challenge7Component } from './challenge7/challenge7.component';

@NgModule({
  declarations: [
    AppComponent,
    Challenge1Component,
    Challenge2Component,
    Challenge4Component,
    Challenge5Component,
    Challenge6Component,
    Challenge7Component,
  ],
  imports: [BrowserModule, FormsModule, TuiRepeatTimesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
