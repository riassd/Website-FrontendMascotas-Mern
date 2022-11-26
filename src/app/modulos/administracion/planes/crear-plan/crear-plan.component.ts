import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent {

  formularioPlan = new FormGroup({
    nombre: new FormControl(""),
    precio: new FormControl(""),
    descripcion: new FormControl(""),
  });

  constructor(private planServicio: PlanService, private router: Router) { }


  ngOnInit(): void { }

  crearPlan() {
    let nombre = this.formularioPlan.value.nombre;
    let precio = this.formularioPlan.value.precio;
    let descripcion = this.formularioPlan.value.descripcion;


    let plan = new ModeloPlan();

    if (nombre != "" && descripcion != "" && precio != "") {
      plan.nombre = nombre as string;
      plan.precio = precio as string;
      plan.descripcion = descripcion as string;

      this.planServicio.crearPlan(plan).subscribe(
        (datos: ModeloPlan) => {
          alert("Plan creado correctamente");
        },
        (error: any) => {
          alert("Error al crear el plan");
        }
      );
    } else {
      alert("Debe llenar todos los campos");
    }
  }

}
