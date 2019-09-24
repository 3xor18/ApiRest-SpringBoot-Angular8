import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesMainComponent } from './clientes-main/clientes-main.component';
import { ClientesListarComponent } from './clientes-listar/clientes-listar.component';
import { ClientesFormularioComponent } from './clientes-formulario/clientes-formulario.component';
import { ClientesDetalleComponent } from './clientes-detalle/clientes-detalle.component';
import { ClienteService } from '../services/cliente.service';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './paginator/paginator.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDatepickerModule} from '@angular/material'
import { MatMomentDateModule} from '@angular/material-moment-adapter'

@NgModule({
  declarations: [ClientesMainComponent, 
                 ClientesListarComponent,
                 ClientesFormularioComponent, 
                 ClientesDetalleComponent, 
                 PaginatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClientesRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,        // <----- import(must)
    MatMomentDateModule      // <----- import for date formating(optional)
  ],
  providers: [ClienteService]
})
export class ClientesModule { }
