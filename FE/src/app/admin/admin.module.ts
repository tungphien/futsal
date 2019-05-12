import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRouting } from './admin.routing';
import { StadiumAdminComponent } from './components/stadiumadmin/stadiumadmin.component';
import { StadiumadminaddComponent } from './components/stadiumadminadd/stadiumadminadd.component';
import { StadiumadminlistComponent } from './components/stadiumadminlist/stadiumadminlist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, StadiumAdminComponent, StadiumadminaddComponent, StadiumadminlistComponent],
  imports: [
    CommonModule,AdminRouting,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
