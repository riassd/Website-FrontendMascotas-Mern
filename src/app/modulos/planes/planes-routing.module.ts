import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElegirPedidoComponent } from './elegir-pedido/elegir-pedido.component';

const routes: Routes = [
  {
    path: 'elegir-plan',
    component:ElegirPedidoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }
