import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlBase = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  /**
   * obtenerPaginacionProducto
   */
  public obtenerPaginacionProducto(): Observable<any> {
    return this.http.get<any>(this.urlBase + "productos")

  }
}
