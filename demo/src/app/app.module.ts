import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NftComponent } from './nft/nft.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AttributesComponent } from './attributes/attributes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from "@angular/cdk/clipboard";

@NgModule({
  declarations: [
    AppComponent,
    NftComponent,
    NavbarComponent,
    AttributesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClipboardModule,
    FormsModule
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
