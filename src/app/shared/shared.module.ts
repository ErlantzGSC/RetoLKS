import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports:[
    LoadingSpinnerComponent,
    SearchBoxComponent,
  ]
})
export class SharedModule { }
