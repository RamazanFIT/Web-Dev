import {Component, Input} from '@angular/core';

import {Product, products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  category : string = "";
  share(url : string) {
    const productLink = encodeURIComponent(url);
    window.open(`tg://msg_url?url=${productLink}`);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  deleteThat(product : Product){
    this.products = this.products.filter(function (x : Product){
      return x !== product;
    })
  }

  getCat(s : string){
    this.category = s;
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
