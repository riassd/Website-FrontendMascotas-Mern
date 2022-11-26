import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioConstrasenaComponent } from './cambio-constrasena/cambio-constrasena.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarConstrasenaComponent } from './recuperar-constrasena/recuperar-constrasena.component';

const routes: Routes = [
  {
    path:"identificar",
    component: IdentificacionComponent
  },
  {
    path:"cerrarSesion",
    component: CerrarSesionComponent
  }
  ,
  {
    path:"cambiarContra",
    component:CambioConstrasenaComponent
  },
  {
    path: "recuperarContra",
    component: RecuperarConstrasenaComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
