import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientesModule } from './cliente/clientes.module';
import { IndexComponent } from './components/index/index.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDatepickerModule} from '@angular/material'
import { MatMomentDateModule} from '@angular/material-moment-adapter'

import localeCL from '@angular/common/locales/es-CL';
import { LoginComponent } from './usuarios/login/login.component';
import { tokenInterceptor } from './interceptores/token.interceptor';
import { authInterceptor } from './interceptores/auth.interceptor';
import { DetalleFacturaComponent } from './facturas/detalle-factura/detalle-factura.component';
import { FacturasComponent } from './facturas/facturas/facturas.component';

/////autocomplete
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

registerLocaleData(localeCL, 'es');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    DetalleFacturaComponent,
    FacturasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClientesModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,        // <----- import(must)
    MatMomentDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule 
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-Ar' },
                {provide:HTTP_INTERCEPTORS,useClass:tokenInterceptor,multi:true},
                {provide:HTTP_INTERCEPTORS,useClass:authInterceptor,multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
