import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({

    'usuario': ['', [Validators.required, Validators.email]],

    'contrasena': ['', [Validators.required]]
  });



  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) {
  }

  ngOnInit(): void {

  }
  IdentificarUsuario() {
    let usuario = this.fgValidador.controls["usuario"].value;
    let contrasena = this.fgValidador.controls["contrasena"].value;
    let contrasenaCifrada = CryptoJS.MD5(contrasena).toString();
    this.servicioSeguridad.Identificar(usuario, contrasenaCifrada).subscribe(
      (datos: any) => {
        alert("Datos correctos")
        this.servicioSeguridad.AlmacenarSesion(datos);
        this.router.navigate(["/inicio"]);
        //OK
      }, (error: any) => {
        //ko
        alert("Datos invalidos")

      }
    )
  }
}



