import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBindingParentComponent } from './input-binding-parent/input-binding-parent.component';
import { InputBindingChildComponent } from './input-binding-child/input-binding-child.component';
import { SetterInetrationParentComponent } from './setter-inetration-parent/setter-inetration-parent.component';
import { SetterInetrationChildComponent } from './setter-inetration-child/setter-inetration-child.component';
import { NgonchangeInetrationChildComponent } from './ngonchange-inetration-child/ngonchange-inetration-child.component';
import { NgonchangeInetrationParentComponent } from './ngonchange-inetration-parent/ngonchange-inetration-parent.component';
import { EventemitterParentComponent } from './eventemitter-parent/eventemitter-parent.component';
import { EventemitterChildComponent } from './eventemitter-child/eventemitter-child.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingParentComponent,
    InputBindingChildComponent,
    SetterInetrationParentComponent,
    SetterInetrationChildComponent,
    NgonchangeInetrationChildComponent,
    NgonchangeInetrationParentComponent,
    EventemitterParentComponent,
    EventemitterChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
