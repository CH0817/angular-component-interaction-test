import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBindingParentComponent } from './input-binding-parent/input-binding-parent.component';
import { InputBindingChildComponent } from './input-binding-child/input-binding-child.component';
import { SetterInetrationParentComponent } from './setter-inetration-parent/setter-inetration-parent.component';
import { SetterInetrationChildComponent } from './setter-inetration-child/setter-inetration-child.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingParentComponent,
    InputBindingChildComponent,
    SetterInetrationParentComponent,
    SetterInetrationChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
