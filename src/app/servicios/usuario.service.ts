import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloUsuario } from '../modelos/usuario.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'

})

export class UsuarioService {
  url = "https://backend-mascota.onrender.com"
  tk: String = "";
  constructor(  private http: HttpClient,
    private seguridadServicio: SeguridadService) {
    this.tk = this.seguridadServicio.obtenerToken();
  }
  obtenerUsuarios(): Observable<ModeloUsuario[]> {
    return this.http.get<ModeloUsuario[]>(`${this.url}` + "/usuarios");
  }
  obtenerUsuarioPorId(id: String): Observable<ModeloUsuario> {
    return this.http.get<ModeloUsuario>(`${this.url}/usuarios/${id}`);
  }

  crearUsuario(usuario: ModeloUsuario): Observable<ModeloUsuario> {
    return this.http.post<ModeloUsuario>(
      `${this.url}` + "/usuarios",
      usuario,
      {
        headers: {
          Authorization: "Bearer "+`${this.tk}`,
        },
      }
    );
  }

}
















