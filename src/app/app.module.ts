import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbIconModule,
  NbButtonModule,
  NbDialogService,
  NbDatepickerModule,
  NbMediaBreakpoint, NbDialogModule,
} from '@nebular/theme';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { LIGHT_THEME } from './theme';
import {CommonMockModule} from './@core/mock/common/common-mock.module';

export const NB_CORE_PROVIDERS = [
  ...CommonMockModule.forRoot().providers,
];

const mediaBreakpoints: NbMediaBreakpoint[] = [
  {
    name: 'xs',
    width: 0,
  },
  {
    name: 'sm',
    width: 320,
  },
  {
    name: 'md',
    width: 480,
  },
  {
    name: 'lg',
    width: 768,
  },
  {
    name: 'xl',
    width: 1024,
  },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    NbThemeModule.forRoot({ name: 'light' }, [LIGHT_THEME], mediaBreakpoints),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    SharedModule,
    AppRoutingModule,
    NbButtonModule,
  ],
  providers: [...NB_CORE_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
