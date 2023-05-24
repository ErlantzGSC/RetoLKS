import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Raee, RaeeList } from '../../interfaces/raee.interface';
import { RaeeService } from '../../services/raee.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'raee-table',
  templateUrl: './raee-table.component.html',
  styleUrls: ['./raee-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RaeeTableComponent implements OnInit {

  expandedRaee: Raee | null;

  @Input() dataSource: RaeeList[] = [];

  columnsToDisplay: string[] = ['CodigoEtiqueta', 'TipoRAEE', 'Marca', 'Modelo', 'Peso', 'DescripcionResiduo'];
  columnsToDisplayNuevo: string[] = ['CodigoEtiqueta','TipoLectura', 'Donde', 'TipoRAEE', 'Marca', 'Modelo', 'Peso', 'DescripcionResiduo'];
  columnsToDisplayExpand: string[] = ['FechaLectura' , 'TipoLectura' , 'Donde' , 'Region', 'Provincia']
  columnsToDisplayVer: string[] = [...this.columnsToDisplayExpand, 'VerMas']


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatInput, { static: true }) input: MatInput;
  tableDataSource: MatTableDataSource<RaeeList>;
  constructor(private raeeService: RaeeService){}

  public SaveCache():void{
    this.raeeService.cacheStore.pagination = { currentPage: this.paginator.pageIndex
      , objectsPerPage:  this.paginator.pageSize};
    this.raeeService.cacheStore.generalFilter = { CodigoEtiqueta: this.input.value};
      this.raeeService.saveToLocalStorage();
  }

  ngOnInit(): void {
    this.tableDataSource = new MatTableDataSource<RaeeList>(this.dataSource);
    this.tableDataSource.paginator = this.paginator;
    this.paginator.pageIndex = this.raeeService.cacheStore.pagination.currentPage;
    this.paginator.pageSize = this.raeeService.cacheStore.pagination.objectsPerPage;
    this.input.value = this.raeeService.cacheStore.generalFilter.CodigoEtiqueta;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }
}


