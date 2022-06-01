import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBindingParentComponent } from './input-binding-parent/input-binding-parent.component';
import { InputBindingChildComponent } from './input-binding-child/input-binding-child.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingParentComponent,
    InputBindingChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
