import { Component } from '@angular/core';
import { IProducto } from './interface/Product.interface';
import { ICategoria } from './interface/Categoria.interface';
import { Producto } from './models/Producto.models';
import { ProductosService } from './service/productos.service';
import { Category } from './models/Categoria.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  producList: IProducto[] = [];
  categoryList: ICategoria[] = [];
  modalAbierto: string | null = null;
  productNew: Producto = new Producto();
  categoryNew: Category = new Category();
  constructor(
    private productService: ProductosService) { }

  ngOnInit() {
    this.listarProducto();
    this.listarCategoria();
  }

  handleCategoria(event: any) {
    const selectCarreraId = event.target.value
    this.productNew.category = selectCarreraId
  }

  listarProducto() {
    this.productService.listarProdcutos().subscribe({
      next: (productos: IProducto[]) => {
        this.producList = productos
        console.log(this.producList);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  listarCategoria() {
    this.productService.listarCategoria().subscribe({
      next: (categorias: ICategoria[]) => {
        this.categoryList = categorias
        console.log(this.categoryList);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  agregarProducto(event: Event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    this.productService.agregarProducto(this.productNew).subscribe({
      next: (productoNuevo: Producto = new Producto()) => {
        console.log(productoNuevo);
        this.productNew = productoNuevo;
        this.cerrarModales(); // Cierra el modal después de agregar un producto
        this.listarProducto();
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  agregarCategoria(event: Event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    this.productService.agregarCategoria(this.categoryNew).subscribe({
      next: (categoriNueva: Category = new Category()) => {
        console.log(categoriNueva);
        this.categoryNew = categoriNueva;
        this.cerrarModales(); // Cierra el modal después de agregar una categoría
        this.listarCategoria()
        this.listarProducto();
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  editarProducto(id: number) {
    console.log("gaaa: ", id);
    this.abrirModal('editarProducto');


  }

  eliminarProducto() {

  }

  abrirModal(tipo: string) {
    this.modalAbierto = tipo;
  }

  cerrarModal(event: Event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del botón "Cancelar"
    this.modalAbierto = null;
  }
  cerrarModales() {
    this.modalAbierto = null;
  }

}
