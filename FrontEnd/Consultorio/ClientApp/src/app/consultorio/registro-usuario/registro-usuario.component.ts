import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  personas:Persona[];
  constructor(private usuarioService: UsuarioService) { }
  
  persona:Persona;
  p: Persona;
  item:number;
  ngOnInit(): void {
    
  }

  addPersona(idPersona: number,nombres:string,apellidos:string,edad:number,celular:string,correo:string ): void {
idPersona = idPersona;
nombres = nombres.trim();
apellidos = apellidos.trim();
edad = edad;
celular = celular.trim();
correo = correo.trim();
    this.usuarioService.addPersona({idPersona,nombres,apellidos,edad,celular,correo} as Persona)
      .subscribe(persona => {
        window.alert("Datos guardados correctamente")
        window.location.reload();
      });
  }
 

}
