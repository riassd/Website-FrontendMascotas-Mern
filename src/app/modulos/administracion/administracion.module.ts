import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearProductoServicioComponent } from './productoServicio/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './productoServicio/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './productoServicio/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { BuscarProductoServicioComponent } from './productoServicio/buscar-producto-servicio/buscar-producto-servicio.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent,
    CrearProductoServicioComponent,
    EditarProductoServicioComponent,
    EliminarProductoServicioComponent,
    BuscarProductoServicioComponent,
    CrearMascotaComponent,
    EditarMascotaComponent,
    EliminarMascotaComponent,
    BuscarMascotaComponent,
    CrearPlanComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdministracionModule { }
