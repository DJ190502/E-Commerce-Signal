import { Observable } from 'rxjs';
import { BaseHttpService } from '../shared/shared-services/base-http.service';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';


@Injectable()
export class ProductsService extends BaseHttpService {

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/`)
  }

}
