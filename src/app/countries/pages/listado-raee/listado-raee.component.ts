import { Component, Input, OnInit } from '@angular/core';
import { RaeeService } from '../../services/raee.service';
import { Raee } from '../../interfaces/raee.interface';


@Component({
  selector: 'listado-raee-page',
  templateUrl: './listado-raee.component.html',
  styles: [
  ]
})
export class ListadoRaeeComponent  implements OnInit{

  public ListadoRaee: Raee[] =[];
  public isLoading: boolean = false;


   constructor(private raeeService: RaeeService){}

   ngOnInit(): void {
     this.ListadoRaee = this.raeeService.cacheStore.ListadoRaeeComponent.ListadoRaee
   }

   searchByRaee():void{
     this.isLoading = true;
     this.raeeService.searchRaee()
     .subscribe( (ListadoRaee: Raee[]) => {
       this.ListadoRaee = ListadoRaee;
       this.isLoading = false;
      });
   }
}
