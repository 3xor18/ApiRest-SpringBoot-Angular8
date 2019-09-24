import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesMainComponent } from './clientes-main/clientes-main.component';
import { ClientesListarComponent } from './clientes-listar/clientes-listar.component';
import { ClientesFormularioComponent } from './clientes-formulario/clientes-formulario.component';
import { ClientesDetalleComponent } from './clientes-detalle/clientes-detalle.component';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';


const routes: Routes = [
  {path:"cliente",component:ClientesMainComponent,children:[
    {path:"ver",component:ClientesListarComponent},
    {path:"ver/page/:page",component:ClientesListarComponent},
    {path:"crear",component:ClientesFormularioComponent,canActivate:[AuthGuard,RoleGuard],data:{role:'ROLE_ADMIN'}},
    {path:"editar/:id",component:ClientesFormularioComponent,canActivate:[AuthGuard,RoleGuard],data:{role:'ROLE_ADMIN'}},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
