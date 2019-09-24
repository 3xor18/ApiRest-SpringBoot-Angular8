import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/interface/icliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Region } from 'src/app/interface/region';
@Component({
  selector: 'app-clientes-formulario',
  templateUrl: './clientes-formulario.component.html',
  styleUrls: ['./clientes-formulario.component.css']
})
export class ClientesFormularioComponent implements OnInit {

  public cliente: ICliente = new ICliente();
  public titulo: string = "Crear Cliente";
  public errores:string[];
  regiones:Region[];

  constructor(private service: ClienteService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
this.cargarCliente();
  }

  cargarCliente():void{
    this.activatedRouter.params.subscribe(params=>{
      let id:number=params['id'];
      if(id){
        this.service.findOne(id).subscribe(resp=>{
          this.cliente=resp;
        })
      }
    });
    this.service.getRegiones().subscribe(regiones=>this.regiones=regiones);
  }

  create(): void {
    this.service.save(this.cliente).subscribe(res => {
      this.router.navigate(['/cliente/ver'])
      Swal.fire({
        title: 'Cliente Agregado!',
        text: `Cliente ${this.cliente.nombre} Agregado Con exito`,
        type: 'success',
        confirmButtonText: 'Ok'
      })
    },err=>{
      this.errores=err.error.errors as string[];
      console.error('Codigo del Status='+err.status);
      console.error(err.error.errros);
    }
    )
  }

  update():void{
    this.cliente.facturas=null;
    this.service.update(this.cliente).subscribe(resp=>{
      this.router.navigate(['/cliente/ver']);
      Swal.fire({
        title: 'Exito en la Operacion!!',
        text: `Cliente ${this.cliente.nombre} Editado Con exito`,
        type: 'success',
        confirmButtonText: 'Ok'
      })
    },err=>{
      this.errores=err.error.errors as string[];
      console.error('Codigo del Status='+err.status);
      console.error(err.error.errros);
    }
    )
  }

  compararRegion(o1:Region,o2:Region):boolean{
    if(o1===undefined&&o2===undefined){
      return true;
    }
    return o1==null||o2==null? false:o1.id===o2.id;
  }
}
