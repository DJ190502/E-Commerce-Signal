import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'products',
        loadChildren: () => import('./pages/products/product-shell/product.routes')
        
    },
    {
        path:'**',
        redirectTo:'products'
    },
];
