import { Component,inject,signal } from '@angular/core';
import { PrimaryButtonComponent } from "../../compenant/primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent,RouterLink],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between">
     <span class=" text-xl" routerLink="/" >My Stor</span>
     <app-primary-button 
     [label]="'Cart ('  + cartService.cart().length + ')'" 
     routerLink="/cart"


     />
     
    </div>
  `,
  styles: ``

})
export class HeaderComponent {

  cartService=inject(CartService)

  showButtonCliked(){

    console.log('clicked');
  }

 
}
