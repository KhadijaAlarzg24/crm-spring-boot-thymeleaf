import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from "../../../compenant/primary-button/primary-button.component";

@Component({
  selector: 'app-order-summry',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border">

    <h2 class="text-2x1">Order Summary </h2>
    <div class="flex flex-col gap-4 mt-2">
    <div class="flex gap-4">
      <span class="text-lg">Total</span>
      <span>{{'$'+total()}}</span>
    </div>
    <app-primary-button label="Proceed to checkout"/>
    </div>
    </div>
  `,
  styles: ``
})
export class OrderSummryComponent {
  cartService=inject(CartService);
  total=computed(()=>{
    let total=0;
    for(const item of this.cartService.cart()){

      total+= item.price;
    }
    return total;

  })

}
