import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button  class="bg-blue-500 text-white W-full border px-5 PY-2 rounded-xl shadow-md hover:opacity-90 items-center"
     (click)="btnClicked.emit()">
      {{ label()}}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {

 label=input('');

 btnClicked=output();
}
