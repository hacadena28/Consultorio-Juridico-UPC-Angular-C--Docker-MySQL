import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IndexedAccessType } from 'typescript';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-registro-caso',
  templateUrl: './registro-caso.component.html',
  styleUrls: ['./registro-caso.component.css']
})
export class RegistroCasoComponent implements OnInit {


  constructor(private usuarioService: UsuarioService) {
    
   }
   personas:Persona[];
   persona:Persona;
   perso: Persona = null;
   per: Persona;
   p: Persona;

   item:number;
   element = false;
   consulta = false;
  ngOnInit(): void {
    this.usuarioService.getAllPersonas().subscribe(result => {
            this.personas = result;
  })
  }
  


  getPersona(persona:Persona|number): any {

    this.usuarioService.getPersonas(persona).subscribe(result => {
      this.per = result;
      console.log(this.per);
      
        window.alert("Datos consultados correctamente")
          
    })
    
  }
  getPersonaMod(persona:Persona): any {

    this.usuarioService.getPersonas(persona.idPersona).subscribe(result => {
      this.perso = result;
      this.showData();
      console.log(this.perso);
      
     this.ocultarConsulta()
          
    })
    
  }
  deletePersonas(persona: Persona|number): void {
    this.usuarioService.deletePersonas(persona).subscribe(result => {
      this.persona = result;
      console.log('eliminado')
      window.alert("Usuario borrado correctamente")
      window.location.reload();
      
    })
  }

  save(idPersona: number,nombres:string,apellidos:string,edad:number,celular:string,correo:string ): void {
    this.perso.idPersona = idPersona;
    this.perso.nombres = nombres.trim();
    this.perso.apellidos = apellidos.trim();
    this.perso.edad = edad;
    this.perso.celular = celular.trim();
    this.perso.correo = correo.trim();
    this.usuarioService.updatePersona(this.perso)
      .subscribe(persona => {
        
        window.alert("Datos modificados correctamente")
        window.location.reload()
        this.hideData()
      });
      console.log('modificando')
  }

  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }

  verConsulta() {
    return (this.consulta = true);
  }
  ocultarConsulta() {
    return (this.consulta = false);
  }
  
  
}