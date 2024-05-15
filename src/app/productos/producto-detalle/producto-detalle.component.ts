import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private apiService: ApiService, private toastr: ToastrService) {
  }

  ngOnInit(): void {

    let id = this.route.snapshot.params["id"];
    if (id) {
      this.apiService.obtenerDetalleProducto(id).subscribe({
        next: (data) => {
          console.log(data)
          this.producto = data.body;
          this.validarVolverIndex()
          this.toastr.success('Carga exitosa');
        },
        error: (error) => {
          this.toastr.error('Problemas no encontramos el producto');
          this.validarVolverIndex()
        }
      });
      // .subscribe(

      //   data => {
      //   console.log(data)
      //   this.producto = data.body;
      //   this.validarVolverIndex()
      // });
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
    this.apiService.eliminar(id).subscribe({
      next: () => {

        this.accionEliminar()
      },
      error: (error) => {
        console.log(error)
        if (error.status != 200) {
          this.toastr.error('Problemas', 'No se pudo eliminar producto');
        } else {
          this.accionEliminar()
        }

      },

    });



  }

  accionEliminar() {
    this.onVolver()
    this.toastr.info('Eliminado', 'Producto eliminado con exito');
  }
}
