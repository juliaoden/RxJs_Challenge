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
import { Challenge10Component } from './challenge10/challenge10.component';
import { Challenge12Component } from './challenge12/challenge12.component';
import { PortalComponent } from './challenge12/portal/portal.component';
import { ModalService } from './challenge12/modal.service';
import { LoadingService } from './challenge4/loading.service';
import { Challenge11Component } from './challenge11/challenge11.component';
import { NotificationModule } from './challenge11/notification/notification.module';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    Challenge1Component,
    Challenge2Component,
    Challenge4Component,
    Challenge5Component,
    Challenge6Component,
    Challenge7Component,
    Challenge10Component,
    Challenge12Component,
    Challenge11Component,
  ],
  providers: [ModalService, LoadingService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    TuiRepeatTimesModule,
    NotificationModule,
  ],
})
export class AppModule {}
