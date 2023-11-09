import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducto } from '../interface/Product.interface';
import { ICategoria } from '../interface/Categoria.interface';
import { Producto } from '../models/Producto.models';
import { Category } from '../models/Categoria.models';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url: string = 'http://localhost:3000/api/v1/';
  constructor(private http: HttpClient) { }

  listarProdcutos() {
    return this.http.get<IProducto[]>(`${this.url}product`);
  }

  listarCategoria() {
    return this.http.get<ICategoria[]>(`${this.url}category`);
  }

  agregarCategoria(category: Category) {
    return this.http.post<Category>(`${this.url}category/`, category);
  }

  agregarProducto(product: Producto) {
    return this.http.post<Producto>(`${this.url}product/`, product);
  }

  buscarPorIdProducto(id: number) {
    return this.http.get<IProducto>(`${this.url}product/${id}`);
  }

  editarProducto(id: number, producto: Producto) {
    return this.http.patch<Producto>(`${this.url}product/${id}`, producto);
  }

  eliminarProducto(id: number) {
    return this.http.delete(`${this.url}/product/${id}`)
  }

}
