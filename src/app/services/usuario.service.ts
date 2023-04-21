import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: 'rpolar', nombre: 'admin', apellido: 'admin', sexo: 'Masculino'},
    {usuario: 'jperes', nombre: 'Jose', apellido: 'Perez', sexo: 'Masculino'},
    {usuario: 'aramirez', nombre: 'Ana', apellido: 'Ramirez', sexo: 'Femenino'},
    {usuario: 'ewatson', nombre: 'Emma', apellido: 'Watson', sexo: 'Femenino'},
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index,1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
