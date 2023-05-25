import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RaeeService } from '../../services/raee.service';
import { switchMap, tap } from 'rxjs';
import { Raee } from '../../interfaces/raee.interface';

@Component({
  selector: 'app-raee-producto',
  templateUrl: './raeeproducto.component.html',
  styleUrls: ['./raeeproducto.component.css'],
})

export class RaeeProductoComponent implements OnInit{

  public raee?: Raee;
  center: google.maps.LatLngLiteral;
  position:google.maps.LatLngLiteral;
  label: google.maps.MarkerLabel;

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
      this.raee = raee;
      this.updateMap();
      return;

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
    updateMap(){
      let posicionSeparada:string[] |undefined = ['0','0'];
      posicionSeparada = this.raee?.GeoPosicion.split(', ')
      this.position = {
        lat: Number(posicionSeparada![0]),
        lng:Number(posicionSeparada![1])
      }
      console.log(this.position);
      this.label = {
        color: 'white',
        text: `${this.raee?.DescripcionResiduo}`
      }
      navigator.geolocation.getCurrentPosition(() => {
        this.center = this.position;
      });
    }


}
