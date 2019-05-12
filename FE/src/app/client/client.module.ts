import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ClientRouting } from './client.routing';
import { ClientComponent } from './client.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [ClientComponent, HomeComponent, AboutComponent, NavComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ClientRouting
  ]
})
export class ClientModule { }
