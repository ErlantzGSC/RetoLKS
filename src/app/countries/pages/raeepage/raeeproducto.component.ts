import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RaeeService } from '../../services/raee.service';
import { switchMap } from 'rxjs';
import { Raee } from '../../interfaces/raee.interface';

@Component({
  selector: 'app-raee-producto',
  templateUrl: './raeeproducto.component.html',
  styleUrls: ['./raeeproducto.component.css'],
})

export class RaeeProductoComponent implements OnInit{

  public raee?: Raee;

  posicionSeparada:string[] |undefined = ['0','0'];
  position = {
    lat: Number(this.posicionSeparada![0]),
    lng:Number(this.posicionSeparada![1])
  }
  label = {
    color: 'red',
    text: 'marcador'
  }

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private RaeeService: RaeeService,
    private router: Router,
     ){}

  ngOnInit(): void {
    this.ActivatedRoute.params
    .pipe(
      switchMap(({id}) => this.RaeeService.searchRaeeById(id)),
    )
    .subscribe( raee => {
      if ( !raee ) return this.router.navigateByUrl('');
      this.separarPosicion();
      return this.raee = raee;

    })

    // .subscribe( raee =>{
      // console.log({raee})

      // if(!raee) return this.router.navigateByUrl('');
      // return this.raee = raee;
      // });
  }
  goBack() {
         this.router.navigate(['']);
        }
    // });

    separarPosicion(){
      this.posicionSeparada = this.raee?.GeoPosicion.split(' ')
    }


}
