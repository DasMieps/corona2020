import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Shoppinglist} from "../shared/shoppinglist";
import {ShoppinglistCoronaService} from "../shared/shoppinglist-corona.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ShoppinglistFactory} from "../shared/shoppinglist-factory";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
    selector: 'bs-shoppinglist-details',
    templateUrl: './shoppinglist-details.component.html',
    styles: []
})
export class ShoppinglistDetailsComponent implements OnInit {
    shoppinglist: Shoppinglist = ShoppinglistFactory.empty();

    constructor(
        private sc: ShoppinglistCoronaService,
        private router: Router,
        private route: ActivatedRoute,
        public authService: AuthenticationService
    ) {    }

    /* showShoppinglistList() {
         this.showListEvent.emit();
     }*/

    ngOnInit() {
        const params = this.route.snapshot.params;
        this.sc.getSingle(params ['id']).subscribe(s => {this.shoppinglist = s; console.log(this.shoppinglist)});
    }

    removeShoppinglist() {
        if ( confirm ( 'Shoppingliste wirklich löschen?' )) {
            this.sc.remove(this.shoppinglist.id).subscribe (res => this.router.navigate ([ '../' ], { relativeTo:this.route }));
        }
    }
}
