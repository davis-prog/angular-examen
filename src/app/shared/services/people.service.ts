import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Usuarios } from '../../models/usuarios.model';
import { Comprobante } from '../../models/comprobante.model';
import { Producto } from '../../models/producto.model';
import { Comprobante_Producto } from '../../models/comprobante_producto.model';
import { TipoComprobante } from '../../models/tipo_comprobante';
import { Serie } from '../../models/serie';

@Injectable()
export class PeopleService {
  constructor(private http: HttpClient) {
  }

  LoginUser(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>('/api/usuarios');
  }

  listComprobante(): Observable<Comprobante[]> {
    return this.http.get<Comprobante[]>('/api/comprobante');
  }

  listcomprobante_Producto(): Observable<Comprobante_Producto[]> {
    return this.http.get<Comprobante_Producto[]>('/api/comprobante_producto');
  }

  listProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>('/api/producto');
  }

  listProductoId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`/api/producto/${id}`);
  }

  listComprobanteId(id: number): Observable<Comprobante> {
    return this.http.get<Comprobante>(`/api/comprobante/${id}`);
  }

  saveProducto(producto): Observable<Producto> {
    return this.http.post<Producto>('/api/producto', producto);
  }

  listTipoComprobante(): Observable<TipoComprobante[]> {
    return this.http.get<TipoComprobante[]>('/api/tipo_comprobante');
  }

  listSerie(): Observable<Serie[]> {
    return this.http.get<Comprobante[]>('/api/serie');
  }

  saveComprobante(comprobante): Observable<Comprobante> {
    return this.http.post<Comprobante>("/api/comprobante", comprobante);
  }
  saveComprobanteProducto(comprobanteProducto): Observable<Comprobante_Producto> {
    return this.http.post<Comprobante>("/api/comprobante_producto", comprobanteProducto);
  }

  deleteProducto(productoID:number): Observable<Producto> {
    return this.http.delete<Producto>(`/api/producto/${productoID}`);
  }



}
