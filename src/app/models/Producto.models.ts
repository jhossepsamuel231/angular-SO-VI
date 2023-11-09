export class Producto {

  name: string;
  price: number;
  stock: number;
  estado: boolean;
  category: string;

  constructor(){
    this.name = '';
    this.price = 0;
    this.stock = 0;
    this.estado = false;
    this.category = '';
  }
}
