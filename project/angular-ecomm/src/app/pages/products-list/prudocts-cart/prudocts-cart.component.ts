import { Component, inject, input, signal } from '@angular/core';
import { product } from '../../../modl/product.modles';
import { PrimaryButtonComponent } from "../../../compenant/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-prudocts-cart',
  imports: [PrimaryButtonComponent],
  template: `
    
   
<div class="mx-auto">
<div class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative">
    <img [src]="product().image" class="w-[200px] h-[200px] object-contain"/>
    <div class="flex flex-col m-2">
    <span class="text-md font-bold">{{product().title}}</span>
    <span class="text-sm">{{'$'+product(). price}}</span>
    <app-primary-button label="Add to Cart" class="mt-3" (btnClicked)="cartService.addToCart(product())"/>
    

    <span class="absolute top-2 right-2 text-sm font-bold " [class]="product().stock ?'text-green-500':'text-red-500'">
    @if (product().stock) {
      {{product().stock}}left
    }@else {Out of stock}
    </span>
    </div>
    </div>
    </div>
  `,
  styles: ``
})
export class PrudoctsCartComponent {


  cartService=inject(CartService);
  product=input.required<product>();
}

