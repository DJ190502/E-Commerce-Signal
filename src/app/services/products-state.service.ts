import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice'
 
interface State {
    products: Product[];
    status: 'loading' | 'sucess' | 'error';
}

@Injectable()
export class ProductsStateService {

  private initialState: State = {
        products: [],
        status: 'loading' as const,
        };

    state = signalSlice({
      initialState: this.initialState,
    })    

    constructor() {
      this.state.products()
    }
}
