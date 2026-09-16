import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummryComponent } from "./order-summry/order-summry.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummryComponent],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2x1">Shopping Cart</h2>
      @for (item of cartService.cart(); track item.id) {
        <app-cart-item [item]="item"/>
      }
      <app-order-summry/>
      
    </div>
  `,
  styles: ``
})

export class CartComponent {

  cartService=inject(CartService);

}
