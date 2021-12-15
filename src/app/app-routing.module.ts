import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DividirComponent } from './dividir/dividir.component';
import { InicioComponent } from './inicio/inicio.component';
import { MultiplicarComponent } from './multiplicar/multiplicar.component';
import { SomaComponent } from './soma/soma.component';
import { SubtrairComponent } from './subtrair/subtrair.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'somar/:num1/:num2',component:SomaComponent},
  {path:'subtrair',component:SubtrairComponent},
  {path:'dividir',component:DividirComponent},
  {path:'multiplicar',component:MultiplicarComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
