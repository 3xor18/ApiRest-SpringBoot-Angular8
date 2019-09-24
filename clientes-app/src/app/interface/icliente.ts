import { Region } from './region';
import { Factura } from './factura';

export class ICliente {
    id:number;
    nombre:string;
    apellido:string;
    telefono:string;
    email:string;
    createAt:string;
    foto:string;
    region:Region;
    facturas:Factura[]=[];   
}
