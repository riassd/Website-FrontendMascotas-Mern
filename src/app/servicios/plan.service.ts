import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ModeloPlan } from "../modelos/plan.modelo";
import { SeguridadService } from "./seguridad.service";

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  url = "https://backend-mascota.onrender.com"
  token: String = "";

  constructor(private http: HttpClient,
    private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.obtenerToken();
    }


  crearPlan(plan: ModeloPlan): Observable<ModeloPlan> {
    return this.http.post<ModeloPlan>(`${this.url}` + "/plans", plan, {
      headers: {
        Authorization: "Bearer " + `${this.token}`,
      },
    });
  }
}
