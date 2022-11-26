import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanesRoutingModule } from './planes-routing.module';
import { ElegirPedidoComponent } from './elegir-pedido/elegir-pedido.component';
import { CancelarPedidoComponent } from './cancelar-pedido/cancelar-pedido.component';


@NgModule({
  declarations: [
    ElegirPedidoComponent,
    CancelarPedidoComponent
  ],
  imports: [
    CommonModule,
    PlanesRoutingModule
  ]
})
export class PlanesModule { }
