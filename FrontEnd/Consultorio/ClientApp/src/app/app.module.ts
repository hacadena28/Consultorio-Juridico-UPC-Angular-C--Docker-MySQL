import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { RegistroCasoComponent } from './consultorio/registro-caso/registro-caso.component';
import { ConsultaCasoComponent } from './consultorio/consulta-caso/consulta-caso.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroPracticanteComponent } from './consultorio/registro-practicante/registro-practicante.component';
import { RegistroUsuarioComponent } from './consultorio/registro-usuario/registro-usuario.component';
import { InicioSesionComponent } from './consultorio/inicio-sesion/inicio-sesion.component';
import { RegistroDocenteComponent } from './consultorio/registro-docente/registro-docente.component';
import { AgendaComponent } from './consultorio/agenda/agenda.component';
import { ConsultaAudienciaEstudianteComponent } from './consultorio/consulta-audiencia-estudiante/consulta-audiencia-estudiante.component';
import { FiltroAgendaPipe } from './pipe/filtro-agenda.pipe';
import { FiltroUsuarioPipe } from './pipe/filtro-usuario.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    RegistroCasoComponent,
    ConsultaCasoComponent,
    RegistroPracticanteComponent,
    RegistroUsuarioComponent,
    InicioSesionComponent,
    RegistroDocenteComponent,
    AgendaComponent,
    ConsultaAudienciaEstudianteComponent,
    FiltroAgendaPipe,
    FiltroUsuarioPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
], { relativeLinkResolution: 'legacy' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
