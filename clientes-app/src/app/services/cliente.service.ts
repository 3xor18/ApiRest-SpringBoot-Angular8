import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { ICliente } from '../interface/icliente';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { Region } from '../interface/region';
import { AuthService } from './auth.service';
import { URL_BACKEND } from '../config/config'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private ENDPOINT = URL_BACKEND + '/api/clientes';
  constructor(private http: HttpClient,
    private authService: AuthService,
    private router: Router) { }



  getRegiones(): Observable<Region[]> {
    return this.http.get<Region[]>(this.ENDPOINT + '/regiones')
  }


  public findAll(page: number): Observable<any[]> {
    return this.http.get(this.ENDPOINT + '/page/' + page).pipe(
      tap((response: any) => {
        console.log('ClienteService: tap 1');
        (response.content as ICliente[]).forEach(cliente => console.log(cliente.nombre));
      }),
      map((response: any) => {
        (response.content as ICliente[]).map(cliente => {
          cliente.nombre = cliente.nombre.toUpperCase();
          //let datePipe = new DatePipe('es');
          //cliente.createAt = datePipe.transform(cliente.createAt, 'EEEE dd, MMMM yyyy');
          //cliente.createAt = formatDate(cliente.createAt, 'dd-MM-yyyy', 'es');
          return cliente;
        });
        return response;
      }),
      tap(response => {
        console.log('ClienteService: tap 2');
        (response.content as ICliente[]).forEach(cliente => console.log(cliente.nombre));
      })
    );
  }


  public findOne(id: number): Observable<ICliente> {
    return this.http.get<ICliente>(`${this.ENDPOINT}/${id}`).pipe(
      catchError(e => {
        if (e.status != 401 && e.error.mensaje) {
          this.router.navigate(['/cliente/ver']);
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  public save(cliente: ICliente): Observable<ICliente> {
    return this.http.post(`${this.ENDPOINT}`, cliente).pipe(
      map((resp: any) => resp.cliente as ICliente),
      catchError(e => {

        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e)
      })
    );
  }

  public update(cliente: ICliente): Observable<ICliente> {
    return this.http.put<ICliente>(`${this.ENDPOINT}/${cliente.id}`, cliente).pipe(
      map((resp: any) => resp.cliennte as ICliente),
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  public delete(id: number): Observable<ICliente> {
    return this.http.delete(`${this.ENDPOINT}/${id}`).pipe(
      map((resp: any) => resp.cliente as ICliente),
      catchError(e => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        } return throwError(e)
      })
    );
  }

  subirFoto(archivo: File, id): Observable<HttpEvent<{}>> {
    let formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("id", id);
    const req = new HttpRequest('POST', `${this.ENDPOINT}/upload/`, formData, {
      reportProgress: true
    });
    return this.http.request(req)
  }
}
