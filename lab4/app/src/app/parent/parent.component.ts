// parent.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>
    <p>Data from Child: {{ receivedDataFromChild }}</p>

    <button (click)="sendDataToChild()">Send Data to Child</button>
    <app-child [dataFromParent]="dataToSend" (dataToParent)="receiveDataFromChild($event)"></app-child>
    <button (click)="openTelegramWithLink()">Some Button</button>
  `,
})
export class ParentComponent {
  dataToSend = 'Hello from Parent!';
  receivedDataFromChild = '';

  sendDataToChild(): void {
    this.dataToSend = 'Updated data from Parent!';
  }

  receiveDataFromChild(data: string): void {
    this.receivedDataFromChild = data;
  }

  openTelegramWithLink() {
    const productLink = encodeURIComponent('https://your-product-link.com');
    window.open(`tg://msg_url?url=${productLink}`, '_blank');
  }
}
