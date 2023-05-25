import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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
  public ListadoRaee: Raee[] =[];
  public isLoading: boolean = false;

  @Input() dataSource: RaeeList[] = [];

  columnsToDisplay: string[] = ['CodigoEtiqueta', 'TipoRAEE', 'Marca', 'Modelo', 'Peso', 'DescripcionResiduo'];
  columnsToDisplayNuevo: string[] = ['CodigoEtiqueta','TipoLectura', 'Donde', 'TipoRAEE', 'Marca', 'Modelo', 'Peso', 'DescripcionResiduo'];
  columnsToDisplayExpand: string[] = ['FechaLectura' , 'TipoLectura' , 'Donde' , 'Region', 'Provincia']
  columnsToDisplayVer: string[] = [...this.columnsToDisplayExpand, 'VerMas']

  @ViewChild(MatTable) table: MatTable<any>;
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

  ngOnInit():void{
    this.searchByRaee();
    this.tableDataSource = new MatTableDataSource<RaeeList>(this.dataSource);
    console.log(this.dataSource);
    console.log(this.tableDataSource);
    this.tableDataSource.paginator = this.paginator;
    this.input.value = this.raeeService.cacheStore.generalFilter.CodigoEtiqueta;
    this.paginator.pageIndex = this.raeeService.cacheStore.pagination.currentPage;
    this.paginator.pageSize = this.raeeService.cacheStore.pagination.objectsPerPage;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }

  searchByRaee(): void {
    this.isLoading = true;
    this.raeeService.searchRaee()
      .subscribe((ListadoRaee: Raee[]) => {
        this.ListadoRaee = ListadoRaee;
        this.populateTableData();
        this.raeeService.saveToLocalStorage();
        this.isLoading = false;
      });
  }

  populateTableData(): void {
    // Clear existing data
    this.dataSource = [];

    this.ListadoRaee.sort((a, b) => a.CodigoEtiqueta.localeCompare(b.CodigoEtiqueta));

    for (let i = 0; i < this.ListadoRaee.length; i++) {
      let raeeList = this.dataSource.find(tr => tr.CodigoEtiqueta === this.ListadoRaee[i].CodigoEtiqueta);

      if (raeeList) {
        raeeList.LecturaRaee.push(this.ListadoRaee[i]);
      } else {
        let temp2: Raee[] = [];
        temp2.push(this.ListadoRaee[i]);

        let temp: RaeeList = {
          CodigoEtiqueta: this.ListadoRaee[i].CodigoEtiqueta,
          LecturaRaee: temp2
        }
        this.dataSource.push(temp);
      }
    }

    for (let i = 0; i < this.dataSource.length; i++) {
      this.dataSource[i].LecturaRaee.sort((a, b) => a.FechaLectura.localeCompare(b.FechaLectura));
    }

    // Assign the populated data source to tableDataSource
    this.tableDataSource.data = this.dataSource;

    // Render the rows
    this.table.renderRows();
  }
}
