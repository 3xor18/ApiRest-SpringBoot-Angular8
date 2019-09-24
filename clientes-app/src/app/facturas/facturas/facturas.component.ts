import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/interface/factura';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, flatMap } from 'rxjs/operators';
import { FacturasService } from 'src/app/services/facturas.service';
import { Producto } from 'src/app/interface/producto';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { ItemFactura } from 'src/app/interface/item-factura';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  titulo: string = 'Nueva Factura';
  factura: Factura = new Factura();


  autoCompleteControl = new FormControl();

  productosFiltrados: Observable<Producto[]>;

  constructor(private clienteService: ClienteService,
    private facturaService: FacturasService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let clienteID = +params.get('clienteId');
      this.clienteService.findOne(clienteID).subscribe(cli => {
        this.factura.cliente = cli
      })
    });

    this.productosFiltrados = this.autoCompleteControl.valueChanges
      .pipe(
        map(value => typeof value === 'string' ? value : value.nombre)
        , flatMap(value => value ? this._filter(value) : [])
      );
  }

  private _filter(value: string): Observable<Producto[]> {
    const filterValue = value.toLowerCase();

    return this.facturaService.filtrarProductos(filterValue);
  }

  mostrarNombre(producto?: Producto): string | undefined {
    return producto ? producto.nombre : undefined;
  }

  seleccionarProducto(event: MatAutocompleteSelectedEvent): void {
    let producto = event.option.value as Producto;
    console.log(producto);

    if (this.existenItem(producto.id)) {
      this.incrementaCantidad(producto.id)
    } else {

      let nuevoItem = new ItemFactura();
      nuevoItem.producto = producto;
      this.factura.items.push(nuevoItem);

    }

    this.autoCompleteControl.setValue('');
    event.option.focus();
    event.option.deselect();
  }

  actualizarCantidad(id: number, event: any): void {
    let cantidad: number = event.target.value as number;
    if (cantidad == 0) {
      return this.eliminarItemFactura(id);
    }
    this.factura.items = this.factura.items.map((item: ItemFactura) => {
      if (id === item.producto.id) { item.cantidad = cantidad; }
      return item;
    })
  }

  existenItem(id: number): boolean {
    let existe = false;
    this.factura.items.forEach((item: ItemFactura) => {
      if (id === item.producto.id) {
        existe = true;
      }
    })
    return existe;
  }

  incrementaCantidad(id: number): void {

    this.factura.items = this.factura.items.map((item: ItemFactura) => {
      if (id === item.producto.id) { ++item.cantidad }
      return item;
    })
  }

  eliminarItemFactura(id: number): void {
    this.factura.items = this.factura.items.filter((item: ItemFactura) => id !== item.producto.id);
  }

  create(): void {
    this.facturaService.create(this.factura).subscribe(factura => {
      Swal.fire(this.titulo,`Factura ${factura.descripcion} creada Con exito!`,'success');
      this.router.navigate(['/facturas',factura.id]);
    });
  }
}
