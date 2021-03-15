import { Component } from '@angular/core';
import { Producto } from './models/producto.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  productosSeleccionados: Producto[];
  productosComprados: Producto[];

  constructor(){
    this.productosSeleccionados = [];
    this.productosComprados = [];
  }
  
  onProductoCreado($event){
    this.productosSeleccionados.push($event);
  }

  onProductoSeleccionado($event){
    const prod = this.productosSeleccionados.splice($event, 1);
    this.productosComprados.push(prod[0]);
  }

  onProductoNoSeleccionado($event){
    const prod = this.productosComprados.splice($event, 1);
    this.productosSeleccionados.push(prod[0]);
  }
}
