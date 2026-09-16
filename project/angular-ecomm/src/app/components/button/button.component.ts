import { Component, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
   <button  class=" text-black W-full  px-5 PY-2 rounded-xl shadow-md hover:bg-gray-400"
    (click)="btnClicked.emit()">
      {{ label()}}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  label= input('');
  btnClicked= output();

}
