import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate  {
  
  constructor(
    private router:Router,
    private authService:AuthService){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(!this.authService.isAuthenticated()){
        this.router.navigate(['/login']);
        return false;
      }

      let role=next.data['role'] as string;
      console.log(role);
      if(this.authService.hasRole(role)){
        return true;
      }
      Swal.fire('Acceso Denegado!','No Tienes permisos para acceder a este recurso!','info');
      this.router.navigate(['/cliente/ver']);
      return false;
  }
  
}
