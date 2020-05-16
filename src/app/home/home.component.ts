import { Component } from '@angular/core';

@Component({
    selector : 'bs-home' ,
    template : `
        <div class="ui container">
            <h1>Home</h1>
            <p>Das ist KWM-Shopping gegen Corona.</p>
            <a routerLink="../shoppinglists" class="ui red button">
                Übersicht ansehen
                <i class="right arrow icon"></i>
            </a>
        </div>
    ` ,
    styles : []
})
export class HomeComponent { }
