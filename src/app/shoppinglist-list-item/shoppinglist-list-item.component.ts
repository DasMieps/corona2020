import { Component, OnInit, Input } from '@angular/core';
import {Shoppinglist} from "../shared/shoppinglist" ;

@Component({
  selector: 'a.bs-shoppinglist-list-item',
  templateUrl: './shoppinglist-list-item.component.html',
  styles: []
})
export class ShoppinglistListItemComponent implements OnInit {
    @Input() shoppinglist: Shoppinglist

  ngOnInit() {  }

}
