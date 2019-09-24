import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Injectable()
export class authInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService,private router:Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
   Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError(e=>{
        if (e.status == 401) {

          if(this.authService.isAuthenticated()){
            this.authService.logout();
          }
          this.router.navigate(['/login']);
        }
        
        if (e.status == 403) {
          this.router.navigate(['cliente/ver']);
          Swal.fire('No Tienes Permisos Correspondientes!',`Lo Siento ${this.authService.usuario.username} No Tienes Permisos Para Esta Opcion`,'error');
          
        }
      return throwError(e);  
      })
    );
  }

}