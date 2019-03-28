import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pocion } from './pocion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PocionService {

  //Variable de tipo lista de Pociones
  pociones: Pocion[];
  constructor(private http: HttpClient) {

  }

  // *******Llamadas GET a la API **********

  getAllPociones(): Observable<Pocion[]> {
    return this.http.get<Pocion[]>("http://localhost:8080/api/pociones");

  }

  getPocionById(id: number): Observable<Pocion> {
    return this.http.get<Pocion>("http://localhost:8080/api/pociones/" + id);
  }

  getPocionesEpicas(): Observable<Pocion[]> {
    return this.http.get<Pocion[]>("http://localhost:8080/api/pociones/obtenerEpic");
  }

  // ******** Metodos POST a la API **********

  insertarPocion(pocion: Pocion): Observable<any> {
    const urlEndPoint = "http://localhost:8080/api/pociones";
    return this.http.post(urlEndPoint, pocion);
  }

  // ******* Metodos PUT a la API ************
  editarPocion(pocion: Pocion): Observable<any> {
    const urlEndPoint = "http://localhost:8080/api/pociones";
    return this.http.put(urlEndPoint, pocion);
  }

  // ******* Metodos DELETE a la API *********

  eliminarPocion(id: number): Observable<any> {
    const urlEndPoint = "http://localhost:8080/api/pociones/" +id;
    return this.http.delete(urlEndPoint);
  }
}
