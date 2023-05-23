import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RaeeService } from '../../services/raee.service';
import { switchMap } from 'rxjs';
import { Raee } from '../../interfaces/raee.interface';

@Component({
  selector: 'app-raee-producto',
  templateUrl: './raeeproducto.component.html',
  styles: [
  ]
})
export class RaeeProductoComponent implements OnInit{

  public raee?: Raee;

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

}
