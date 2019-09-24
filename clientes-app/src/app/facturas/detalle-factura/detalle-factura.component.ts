import { Component, OnInit } from '@angular/core';
import { FacturasService } from 'src/app/services/facturas.service';
import { Factura } from 'src/app/interface/factura';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.css']
})
export class DetalleFacturaComponent implements OnInit {

  titulo: string = "Factura";
  factura: Factura;


  constructor(
    private activatedRoute: ActivatedRoute,
    private facturaService: FacturasService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=>{
      let id=+params.get('id');
      this.facturaService.getFactura(id).subscribe(factura=>{
        this.factura=factura;
      })
    })
  }

}
