import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthService,
              private router:Router) { }

  ngOnInit() {
  }

  logout():void{
    this.authService.logout();
    Swal.fire('Sesion Cerrada!','Bye Bye!','success');
    this.router.navigate(['/cliente/ver']);
  }
}
