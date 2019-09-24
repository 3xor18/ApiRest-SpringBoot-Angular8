import { Component, OnInit, Input } from '@angular/core';
import { ICliente } from 'src/app/interface/icliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';
import { ModalClienteService } from 'src/app/services/modal-cliente.service';
import { AuthService } from 'src/app/services/auth.service';
import { FacturasService } from 'src/app/services/facturas.service';
import { Factura } from 'src/app/interface/factura';

@Component({
  selector: 'app-clientes-detalle',
  templateUrl: './clientes-detalle.component.html',
  styleUrls: ['./clientes-detalle.component.css']
})
export class ClientesDetalleComponent implements OnInit {

  @Input() cliente: ICliente;
  titulo: string = "Detalle del Cliente";
  public fotoSeleccionada: File;
  prograso:number=0;

  constructor(private service: ClienteService,
              private facturaService:FacturasService,
              private activatedRouter: ActivatedRoute,
              public authService:AuthService,
              public modalService: ModalClienteService) { }

  ngOnInit() {
 
  }

  seleccionarFoto(event) {
    this.fotoSeleccionada = event.target.files[0];
    this.prograso=0;
    console.log(this.fotoSeleccionada);
    if(this.fotoSeleccionada.type.indexOf('image')<0){
      Swal.fire('Error Al Intentar Cargar La Imagen','Debe Seleccionar Solo Imagenes!','error')
      this.fotoSeleccionada=null;
    }
  }

  subirFoto() {
    if (!this.fotoSeleccionada) { 
      Swal.fire('Error Al Intentar Cargar La Imagen','Seleccione Alguna Foto!','error')
    } else {
      this.service.subirFoto(this.fotoSeleccionada, this.cliente.id).subscribe(event => {
        //this.cliente = cliente;
        if(event.type===HttpEventType.UploadProgress){
          this.prograso=Math.round((event.loaded/event.total)*100)
        }else if(event.type===HttpEventType.Response){
          let response:any=event.body;
          this.cliente=response.cliente as ICliente;
          this.modalService.notificarUpload.emit(this.cliente);
          Swal.fire('La Foto Se Ha Subido Con Exito!', response.mensaje, "success");
        }
      })
    }
  }

  cerrarModal(){
    this.modalService.cerrarModal();
    this.fotoSeleccionada=null;
    this.prograso=0;
  }

  delete(factura:Factura):void{
     Swal.fire({
      title: '¿Estas Seguro?',
      text: "Con Ok Borraras los datos de la Factura, Con Cancel no pasara Nada",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Borrar!'
    }).then((result) => {
      if (result.value) {
        this.facturaService.delete(factura.id).subscribe(resp => {
          this.cliente.facturas = this.cliente.facturas.filter(f =>f !== factura);
        })
        Swal.fire(
          'Datos Borrados!',
          `Factura ${factura.descripcion} Borrada con Exito`,
          'success'
        )
      }
    })
  }
}
