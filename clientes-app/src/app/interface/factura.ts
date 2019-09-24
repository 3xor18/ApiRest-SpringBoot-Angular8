import { ItemFactura } from './item-factura';
import { ICliente } from './icliente';

export class Factura {
    id: number;
    descripcion: string;
    observacion: string;
    items: ItemFactura[] = [];
    cliente: ICliente;
    total: number;
    createAt: string;

    calcularGranTotal(): number {
        this.total=0;
        this.items.forEach((items: ItemFactura) => {
            this.total=this.total+items.calcularImporte();
        });
        return this.total;
    }
}
