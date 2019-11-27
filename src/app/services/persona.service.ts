import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonaFiltro } from '../models/persona-filtro';
import { Persona } from '../models/persona';
@Injectable()
export class PersonaService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append("Content-Type", "application/json");
    this.headers = this.headers.append("Access-Control-Allow-Origin", "*");
    this.headers = this.headers.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    this.headers = this.headers.append("Access-Control-Allow-Headers", "X-Requested-With,content-type");

  }

  find(_body: PersonaFiltro) {
    let url = 'http://localhost:8092/poc-backend/api/persona/find';
    return this.http.post(url, JSON.stringify(_body), { headers: this.headers, observe: 'response' });
  }

  get(id: string) {

    let url = 'http://localhost:8092/poc-backend/api/persona/get/' + id;
    return this.http.get<any>(url, { headers: this.headers, observe: 'response' });
  }

  saveOrUpdate(_body: Persona) {
    let url = 'http://localhost:8092/poc-backend/api/persona/saveOrUpdate';
    return this.http.put(url, JSON.stringify(_body), { headers: this.headers, observe: 'response' });
  }

  delete(id: string) {
    let url = "http://localhost:8092/poc-backend/api/persona/delete/" + id;
    return this.http.delete<any>(url, { headers: this.headers, observe: 'response' });
  }
}
