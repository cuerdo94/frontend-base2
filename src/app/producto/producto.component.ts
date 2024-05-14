import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  productos: any[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.obtenerPaginacionProducto();
  }

  obtenerPaginacionProducto() {
    this.apiService.obtenerPaginacionProducto().subscribe(data => {
      console.log(data);
      this.productos = data.body.content;
      console.log(this.productos);
    })
  }




}
