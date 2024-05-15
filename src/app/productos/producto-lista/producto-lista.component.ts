import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common'
import { Router, RouterModule } from '@angular/router'
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoComponent {
  private router = inject(Router)
  productos: any[] = [];
  currentPage: number = 0;
  pageSize: number = 10;
  totalPages: number = 0;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.obtenerPaginacionProducto();
  }

  obtenerPaginacionProducto() {

    this.apiService.obtenerPaginacionProducto(this.currentPage,
      this.pageSize).subscribe(data => {
        this.productos = data.body.content;
        this.totalPages = data.body.totalPages;
        this.currentPage = data.body.pageable.pageNumber;
      });

  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.obtenerPaginacionProducto();
  }

  getRange(n: number): any[] {
    return Array.from({ length: n }, (_, i) => i);
  }
  onSelect(id: any): void {
    console.log(id)
    this.router.navigateByUrl("/productos/" + id)
  }


}
