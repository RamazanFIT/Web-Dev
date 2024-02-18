
// child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>Child Component</h3>
    <p>Data from Parent: {{ dataFromParent }}</p>
    <button (click)="sendDataToParent()">Send Data to Parent</button>

  `,
  standalone: true
})
export class ChildComponent {
  @Input() dataFromParent = '';
  @Output() dataToParent = new EventEmitter<string>();

  sendDataToParent(): void {
    this.dataToParent.emit('Hello from Child!');
  }
}


