import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomaComponent } from './soma/soma.component';
import { DividirComponent } from './dividir/dividir.component';
import { MultiplicarComponent } from './multiplicar/multiplicar.component';
import { SubtrairComponent } from './subtrair/subtrair.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    SomaComponent,
    DividirComponent,
    MultiplicarComponent,
    SubtrairComponent,
    ResultadoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
