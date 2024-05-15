import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent {
  producto: any
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    if (id) {
      this.apiService.obtenerDetalleProducto(id).subscribe(data => {
        console.log(data)
        this.producto = data.body;
        this.validarVolverIndex()
      });
    } else { this.validarVolverIndex() }
  }

  validarVolverIndex(): void {
    if (this.producto == undefined) {
      this.onVolver()
    }

  }

  onVolver(): void {
    this.router.navigateByUrl("/productos")
  }

  onEliminar(id: any): void {
    this.apiService.eliminar(id).subscribe(data => {
      this.validarVolverIndex()
    });
  }
}
