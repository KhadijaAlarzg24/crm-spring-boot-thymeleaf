import { Component, inject, input } from '@angular/core';
import { product } from '../../../modl/product.modles';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    
    <div class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center">
    <img [src]="item().image" class="w-[50px] h-[50px]object-contain">

    <div class="flex flex-col">
<!--Uses item() to access a signal's value-->
      <span class="text-md font-bold">{{item().title}}</span>
      <span class="text-sm">{{'$'+item().price}}</span>
    </div>

<!--  Remmove button-->
    <div class="flex-1"></div>
<!--Calls removeFormCart() from a cart service when clicked-->
    <app-button label="Remove" (btnClicked)="cartService.removeFormCart(item().id)"/>
    </div>
  `,
  styles: ``
})
export class CartItemComponent {
  
//cartService injected using Angular's dependency injection:
  cartService=inject(CartService);

//A required input property item of type product
  item = input.required<product>();

}
