import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductAlertsComponent} from "./product-alerts/product-alerts.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ProductItemComponent} from "./product-item/product-item.component";
import {CategoryComponent} from "./category/category.component";
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: ProductListComponent},
        ]),
        ProductAlertsComponent,
        HttpClientModule,
        ProductItemComponent,
        CategoryComponent,
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        ProductListComponent,
    ],
    exports: [
        ProductListComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
