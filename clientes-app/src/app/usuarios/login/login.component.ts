import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titulo:string='Por Favor Sig in!';
  usuario:Usuario;

  constructor(private authService:AuthService,
              private router:Router) {
    this.usuario=new Usuario();
   }

  ngOnInit() {
    if(this.authService.isAuthenticated()){
      Swal.fire('Login!!',`Hola ${this.authService.usuario.username} Ya estas Autenticado`,'info');
      this.router.navigate(['/cliente/ver']);
    }
  }

  login():void{
    console.log(this.usuario);
    if(this.usuario.username==null||this.usuario.password==null){
      Swal.fire('Error en Login!','Usuario o Clave No Pueden Estas Vacias!','error');
      return 
    }
    this.authService.login(this.usuario).subscribe(response=>{
      console.log(response);
      
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);

      let usuario=this.authService.usuario;
      this.router.navigate(['/cliente/ver']);
      Swal.fire('Login',`Hola ${usuario.username}, Has Iniciado Secion Con Exito!`,'success');
    },err=>{
      if(err.status==400){
        Swal.fire('Error en Login!','Usuario O Clave Incorrectas!','error');
      }
    }
    )
    
  }
}
