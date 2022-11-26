import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {


  formularioUsuario = new FormGroup({
    cedula: new FormControl(""),
    nombre: new FormControl(""),
    apellido: new FormControl(""),
    telefono: new FormControl(""),
    correo: new FormControl(""),
    rol: new FormControl(""),
  });
  constructor(
    private usuarioServicio: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  crearUsuario() {
    let nombre = this.formularioUsuario.value.nombre;
    let apellido = this.formularioUsuario.value.apellido;
    let cedula = this.formularioUsuario.value.cedula;
    let telefono = this.formularioUsuario.value.telefono;
    let correo = this.formularioUsuario.value.correo;
    let rol = this.formularioUsuario.value.rol;
    let usuario = new ModeloUsuario();

    if (nombre == "" || apellido == "" || cedula == "" || telefono == "" || correo == "" || rol == "") {
      alert("Todos los campos son obligatorios");
    }

    usuario.nombre = nombre as string;
    usuario.apellido = apellido as string;
    usuario.cedula = cedula as string;
    usuario.telefono = telefono as string;
    usuario.correo = correo as string;
    usuario.rol = rol as string;


    this.usuarioServicio.crearUsuario(usuario).subscribe(
      (datos: ModeloUsuario) => {
        alert("Se ha creado el usuario con exito");

      },
      (error: any) => {
        alert("Error al crear el usuario");

      }
    );

  }


}
