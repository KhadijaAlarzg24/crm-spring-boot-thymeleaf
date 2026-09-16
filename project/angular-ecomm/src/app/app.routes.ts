import { Routes } from '@angular/router';
import { productsmistComponent } from './pages/products-mist/products-mist.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [{

path:'',
pathMatch:'full',
component:productsmistComponent

},
{
path:'cart',
component:CartComponent,

},
];
