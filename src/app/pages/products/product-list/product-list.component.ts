import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../../services/products-state.service';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from "../ui/product-card/product-card.component";


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsStateService],
})
export default class ProductListComponent {
  productsState = inject(ProductsStateService);
  product: unknown;

  

}
 