import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlBase = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  public obtenerPaginacionProducto(pageNumber: number, pageSize: number): Observable<any> {
    const url = `${this.urlBase}productos?numeroPagina=${pageNumber}&cantidadItems=${pageSize}`;
    return this.http.get<any>(url)
  }

  public obtenerDetalleProducto(productoId: number) {
    const url = `${this.urlBase}productos/${productoId}`;
    return this.http.get<any>(url)
  }

  public eliminar(productoId: number) {
    const url = `${this.urlBase}productos/${productoId}`;
    return this.http.delete<any>(url)
  }
}
