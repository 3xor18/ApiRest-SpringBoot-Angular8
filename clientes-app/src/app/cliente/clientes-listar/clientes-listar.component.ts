import { Component, OnInit, OnChanges } from '@angular/core';
import { ICliente } from 'src/app/interface/icliente';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ModalClienteService } from 'src/app/services/modal-cliente.service';
import { AuthService } from 'src/app/services/auth.service';
import { URL_BACKEND } from '../../config/config';

@Component({
  selector: 'app-clientes-listar',
  templateUrl: './clientes-listar.component.html',
  styleUrls: ['./clientes-listar.component.css']
})
export class ClientesListarComponent implements OnInit, OnChanges {
  clientes: ICliente[];
  paginador: any;
  clienteSeleccionado: ICliente;
  urlBackend:string=URL_BACKEND;

  constructor(private service: ClienteService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public modalService: ModalClienteService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');
      if (!page) { page = 0; }

      this.service.findAll(page)
        .pipe(
          tap((response: any) => {
            console.log('ClientesComponent: tap 3');
            (response.content as ICliente[]).forEach(cliente => {
              console.log(cliente.nombre);
            });
          })
        ).subscribe(response => {
          this.clientes = response.content as ICliente[]
          this.paginador = response;
        });
    });
    this.modalService.notificarUpload.subscribe(cliente => {
      this.clientes = this.clientes.map(clienteOriginal => {
        if (cliente.id == clienteOriginal.id) {
          clienteOriginal.foto = cliente.foto;
        }
        return clienteOriginal;
      })
    })
  }

  ngOnChanges() {

  }

  delete(cliente: ICliente): void {

    Swal.fire({
      title: '¿Estas Seguro?',
      text: "Con Ok Borraras los datos del cliente, Con Cancel no pasara Nada",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Borrar!'
    }).then((result) => {
      if (result.value) {
        this.service.delete(cliente.id).subscribe(resp => {
          this.clientes = this.clientes.filter(cli => cli !== cliente);
        })
        Swal.fire(
          'Datos Borrados!',
          `Cliente ${cliente.nombre} Borrado con Exito`,
          'success'
        )
      }
    })

  }

  abrirModal(cliente: ICliente) {
    this.clienteSeleccionado = cliente;
    this.modalService.abrirModal();
  }

}
