import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './compenants/header/header.component';

import { productsmistComponent } from "./pages/products-mist/products-mist.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,RouterOutlet],
  template: `
    

    <app-header />
    <router-outlet/>
  `,
  styles: ``,
})
export class AppComponent {
}
