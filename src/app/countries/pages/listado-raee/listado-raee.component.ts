import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RaeeService } from '../../services/raee.service';
import { Raee, RaeeList } from '../../interfaces/raee.interface';
import { RaeeTableComponent } from '../../components/raee-table/raee-table.component';


@Component({
  selector: 'listado-raee-page',
  templateUrl: './listado-raee.component.html',
  styles: [
  ]
})
export class ListadoRaeeComponent {

  @ViewChild(RaeeTableComponent, { static: true }) table!: any;
   constructor(private raeeService: RaeeService){}



}
