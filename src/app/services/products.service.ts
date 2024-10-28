import { Observable } from 'rxjs';
import { BaseHttpService } from '../shared/shared-services/base-http.service';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';


@Injectable({ providedIn: 'root' })
export class ProductsService extends BaseHttpService {
  getProducts(page: number): Observable<Product[]>;
  getProducts(): Observable<Product[]>;

  getProducts(page?: number): Observable<Product[]> {
    if (page !== undefined) {
      return this.http.get<Product[]>(`${this.apiUrl}/`, {
        params: { limit: page * 5 },
      });
    } else {
      return this.http.get<Product[]>(`${this.apiUrl}/`);
    }
  }
}
