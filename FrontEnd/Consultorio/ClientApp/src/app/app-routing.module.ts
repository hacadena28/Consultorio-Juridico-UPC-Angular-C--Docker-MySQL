import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioComponent } from './consultorio/registro-usuario/registro-usuario.component';
import { InicioSesionComponent } from './consultorio/inicio-sesion/inicio-sesion.component';
import { RegistroDocenteComponent } from "./consultorio/registro-docente/registro-docente.component";
import { RegistroPracticanteComponent } from "./consultorio/registro-practicante/registro-practicante.component";
import { RegistroCasoComponent } from './consultorio/registro-caso/registro-caso.component';
import { ConsultaCasoComponent } from "./consultorio/consulta-caso/consulta-caso.component";
import { ConsultaAudienciaEstudianteComponent } from "./consultorio/consulta-audiencia-estudiante/consulta-audiencia-estudiante.component";
import { Agenda } from "./consultorio/models/agenda";
import { Routes, RouterModule } from "@angular/router";
import {AppComponent} from "./app.component";
import {AgendaComponent} from "./consultorio/agenda/agenda.component";

const routes: Routes = [
  {
    path: 'registroUsuario',
    component: RegistroUsuarioComponent
  },{
    path: 'iniciarSesion',
    component: InicioSesionComponent
  },{
    path: 'registroEstudiante',
    component: RegistroPracticanteComponent
  },{
    path: 'registroDocente',
    component: RegistroDocenteComponent
  },{
    path: 'registroAgenda',
    component: AgendaComponent
  },{
    path: 'consultaUsuarios',
    component: RegistroCasoComponent
  },{
    path: 'consultaCaso',
    component: ConsultaCasoComponent
  },{
    path: 'consultaAudienciaEstudiante',
    component: ConsultaAudienciaEstudianteComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
