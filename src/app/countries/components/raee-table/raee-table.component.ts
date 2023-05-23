import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Raee } from '../../interfaces/raee.interface';
import { RaeeService } from '../../services/raee.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'raee-table',
  templateUrl: './raee-table.component.html',

})
export class RaeeTableComponent implements OnInit {

  @Input() dataSource: Raee[] = [];
  displayedColumns: string[] = ['CargaDatosLecturasId', 'CodigoEtiqueta', 'Marca', 'Modelo', 'Peso', 'DescripcionDeResiduos', 'Ver Mas'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  tableDataSource: MatTableDataSource<Raee>;
  constructor(private raeeService: RaeeService){}

  public SaveCache():void{
    this.raeeService.cacheStore.pagination = { currentPage: this.paginator.pageIndex
      , objectsPerPage:  this.paginator.pageSize};
      this.raeeService.saveToLocalStorage();
  }

  ngOnInit(): void {
    this.tableDataSource = new MatTableDataSource<Raee>(this.dataSource);
    this.tableDataSource.paginator = this.paginator;
    this.paginator.pageIndex = this.raeeService.cacheStore.pagination.currentPage;
    this.paginator.pageSize = this.raeeService.cacheStore.pagination.objectsPerPage;
  }
}



