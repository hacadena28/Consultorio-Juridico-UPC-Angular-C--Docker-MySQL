import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../consultorio/models/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private urlBase = 'https://localhost:44380/api/Persona';
  constructor( private http: HttpClient) { }

  

  getAllPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.urlBase)
  }
  getPersonas<Data>(persona:Persona|number): Observable<Persona> {
  //  const idPersona = typeof persona ==='number' ? persona : persona.idPersona;
  console.log(persona)
    const url = `${this.urlBase}/${persona}`;
    return this.http.get<Persona>(url)
  }
  deletePersonas(persona:Persona|number): Observable<Persona> {
    const idPersona = typeof persona ==='number' ? persona : persona.idPersona;
    const url = `${this.urlBase}/${idPersona}`;
    return this.http.delete<Persona>(url )
  }
  addPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.urlBase, persona)
  }
  updatePersona(persona: Persona): Observable<any> {
    return this.http.put(this.urlBase, persona)
  }

}
