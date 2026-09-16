import { Injectable, signal } from '@angular/core';
import { product } from '../modl/product.modles';

//available throughout the entire application.
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart=signal<product[]>([

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
      price: 124.55,
      stock: 10,
    },
  ]);
  
addToCart(product:product){
//creates a copy of the current cart items array.
  this.cart.set([...this.cart(),product]);
}

removeFormCart(id:number){
  //update the cart observable with the new array containing the added product
  this.cart.set(this.cart().filter((p)=> p.id !==id));
}
  constructor() { }
}
