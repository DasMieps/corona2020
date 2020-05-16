// import {Component, OnInit, EventEmitter, Output} from '@angular/core';
// import {Shoppinglist, Item, Comment} from "../shared/shoppinglist";
// import {ShoppinglistCoronaService} from "../shared/shoppinglist-corona.service";
// import {ActivatedRoute, Router} from "@angular/router";
//
// @Component({
//     selector: 'bs-shoppinglist-list',
//     templateUrl: './shoppinglist-list.component.html',
//     styles: []
// })
// export class ShoppinglistListComponent implements OnInit {
//     shoppinglist: Shoppinglist[]; //keine Ahnung?! =(
//     shoppinglists: Shoppinglist[];
//     @Output() showDetailsEvent = new EventEmitter<Shoppinglist>();
//
//     constructor(private sc: ShoppinglistCoronaService,
//                 private router: Router,
//                 private route: ActivatedRoute) {
//     }
//
//     ngOnInit() {
//         this.sc.getAll().subscribe(res => this.shoppinglists = res);
//         /*  this.shoppinglists = this.sc.getAll();
//
//
//          this.shoppinglists =
//          [new Shoppinglist (
//                  1,
//                  'Hubi Schnubi List' ,
//                  new Date(2020, 3, 1),
//                  1,
//                  null,
//                  null,
//                  [new Item (1, 'Paprika', 1, 1),
//                        new Item (2, 'Apfel', 2, 1)],
//                  [new Comment(1,'Das ist ein Kommentar. Yay!', 2,new Date(2020, 4,3) )]
//
//              )
//          ]; */
//     }
//
//     showDetails(shoppinglist: Shoppinglist) {
//         this.showDetailsEvent.emit(shoppinglist);
//     }
//
// }

import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Shoppinglist, Item, Comment} from "../shared/shoppinglist";
import {ShoppinglistCoronaService} from "../shared/shoppinglist-corona.service";

@Component({
    selector: 'bs-shoppinglist-list',
    templateUrl: './shoppinglist-list.component.html',
    styles: []
})
export class ShoppinglistListComponent implements OnInit {
    shoppinglists: Shoppinglist[];
    @Output() showDetailsEvent = new EventEmitter<Shoppinglist>();
    constructor(private sc: ShoppinglistCoronaService){}
    ngOnInit() {
        this.sc.getAll().subscribe(res=>this.shoppinglists=res);
    }
    showDetails(shoppinglist:Shoppinglist){
        this.showDetailsEvent.emit(shoppinglist);
    }
}