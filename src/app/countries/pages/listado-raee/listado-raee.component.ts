import { Component, Input, OnInit } from '@angular/core';
import { RaeeService } from '../../services/raee.service';
import { Raee, RaeeList } from '../../interfaces/raee.interface';


@Component({
  selector: 'listado-raee-page',
  templateUrl: './listado-raee.component.html',
  styles: [
  ]
})
export class ListadoRaeeComponent  implements OnInit{

  public ListadoRaee: Raee[] =[];
  public TablaRaee: RaeeList[] = [];
  public isLoading: boolean = false;


   constructor(private raeeService: RaeeService){}

   ngOnInit(): void {
    this.searchByRaee();
     this.TablaRaee = this.raeeService.cacheStore.ListadoRaeeComponent.TablaRaee
     if(this.ListadoRaee.length === 0)
     this.searchByRaee();
   }

   searchByRaee():void{
     this.isLoading = true;
     this.raeeService.searchRaee()
     .subscribe( (ListadoRaee: Raee[]) => {
       this.ListadoRaee = ListadoRaee;
       this.importTableList();
       this.isLoading = false;
      });
   }



   importTableList():void{
    this.ListadoRaee.sort((a, b) => a.CodigoEtiqueta.localeCompare(b.CodigoEtiqueta));

    for (let i = 0; i < this.ListadoRaee.length; i++) {
      let raeeList = this.TablaRaee.find(tr => tr.CodigoEtiqueta === this.ListadoRaee[i].CodigoEtiqueta);

      if (raeeList) {
        // alimentar listado lecturas
        raeeList.LecturaRaee.push(this.ListadoRaee[i]);
      }else{
        // crear raeelist
        let temp2: Raee[] = [];
        temp2.push(this.ListadoRaee[i]);

        let temp: RaeeList = {
          CodigoEtiqueta: this.ListadoRaee[i].CodigoEtiqueta,
          LecturaRaee: temp2
        }
        this.TablaRaee.push(temp);
      }
    }
    for (let i = 0; i < this.TablaRaee.length; i++) {
      this.TablaRaee[i].LecturaRaee.sort((a, b) => a.FechaLectura.localeCompare(b.FechaLectura));
    }
   }
}
