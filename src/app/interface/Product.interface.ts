import { ICategoria } from "./Categoria.interface";

export interface IProducto{
  id: number;
  name: string;
  price: number;
  stock:number;
  estado: boolean;
  category: ICategoria;
}
