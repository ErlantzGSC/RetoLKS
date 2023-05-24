import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ListadoRaeeComponent } from './pages/listado-raee/listado-raee.component';
import { RaeeTableComponent } from './components/raee-table/raee-table.component';
import { RaeeProductoComponent } from './pages/raeepage/raeeproducto.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import { RaeeRoutingModule } from './raee-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import{ MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';





@NgModule({
  declarations: [
    ListadoRaeeComponent,
    RaeeProductoComponent,
    RaeeTableComponent


  ],
  imports: [
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,

    CommonModule,
    RaeeRoutingModule,
    SharedModule,

    MatPaginatorModule,
    MatTableModule,
    MatIconModule,

    RouterModule,
    MatPaginatorModule,
    MatInputModule,



  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class RaeeModule { }
