
import { Component, input, signal } from '@angular/core';
import { product } from '../../modl/product.modles';
import { PrudoctsCartComponent } from '../products-list/prudocts-cart/prudocts-cart.component';

@Component({
  selector: 'app-products-mist',
  imports: [ PrudoctsCartComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
     
 
 <!--structural directives-->
 @for (product of products(); track product.id) {

     
     <app-prudocts-cart [product]="product"/>

    }
    </div>
  `,
  styles: ``
})

export class productsmistComponent {
  products = signal<product[]>([
    {
      id: 1,
      title: 'Black brown bag',
      image:'https://images.pexels.com/photos/26292251/pexels-photo-26292251/free-photo-of-mode-retro-vintage-luxe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 12.455,
      stock: 0,
    },

    {
      id: 2,
      title: 'Bag Brown',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 12.455,
      stock: 10,
    },

    {
      id: 3,
      title: 'Bag Black',
      image: 'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 12.455,
      stock: 10,
    },


    {
      id: 4,
      title: 'Bag Blan',
      image: 'https://images.pexels.com/photos/26954379/pexels-photo-26954379/free-photo-of-luxe-cuir-sac-a-main-elegant.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      price: 12.455,
      stock: 10,
    },

    
  ]);

}

