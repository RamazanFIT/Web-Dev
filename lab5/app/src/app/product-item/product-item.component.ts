import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product, products} from "../products";
import {NgIf} from "@angular/common";
import {ProductAlertsComponent} from "../product-alerts/product-alerts.component";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    NgIf,
    ProductAlertsComponent
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product : Product | undefined;
  @Output() throwOutToParent : EventEmitter<Product> = new EventEmitter<Product>();
  @Output() getLinkToProduct : EventEmitter<string> = new EventEmitter<string>();
  flag : number = 0;

  share(s : string){
    this.getLinkToProduct.emit(s);
  }

  onNotify(a : number){
    alert("We will notify about " + this.product?.name);
  }

  passLike() {
    if (this.product === undefined) return;

    this.flag ^= 1;
    if (this.flag) {
      this.product.likes += 1;
    } else {
      this.product.likes -= 1;
    }
  }

  deleteThat(){
    this.throwOutToParent.emit(this.product);
  }

}
