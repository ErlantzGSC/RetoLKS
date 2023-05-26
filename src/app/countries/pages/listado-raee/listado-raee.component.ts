import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RaeeService } from '../../services/raee.service';
import { Raee, RaeeList } from '../../interfaces/raee.interface';
import { RaeeTableComponent } from '../../components/raee-table/raee-table.component';


@Component({
  selector: 'listado-raee-page',
  templateUrl: './listado-raee.component.html',
  styleUrls: ['./listado-raee.component.css'],
})
export class ListadoRaeeComponent {
   constructor(private raeeService: RaeeService){}



}
