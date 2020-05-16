// import { Injectable } from '@angular/core';
// import { Shoppinglist, Item, Comment} from "./shoppinglist";
// import {HttpClient} from "@angular/common/http" ;
// import {Observable, throwError } from "rxjs" ;
// import { catchError , retry } from 'rxjs/operators' ;
//
// @Injectable()
// export class ShoppinglistCoronaService {
//     private api = 'http://coronashopping20.s1710456018.student.kwmhgb.at/api' ;
//
//     constructor(private http : HttpClient) { }
//
//     /*this.shoppinglists = [
//         new Shoppinglist(1,
//             'Hubi Schnubi List' ,
//             new Date(2020, 3, 1),
//             1,
//             null,
//             null,
//             [new Item (1, 'Paprika', 1, 1),
//                 new Item (2, 'Apfel', 2, 1)],
//             [new Comment(1,'Das ist ein Kommentar. Yay!', 2,new Date(2020, 4,3) )]
//         )
//     ]*/
//
//
//     getAll(): Observable<Array<Shoppinglist>> {
//         return this.http.get(`${this.api}/shoppinglists`)
//             .pipe(retry(3)).pipe(catchError(this.errorHandler))
//     }
//
//     getSingle(id: number): Observable<Shoppinglist> {
//         return this.http.get<Shoppinglist>(`${this.api}/shoppinglist/${id} `)
//             .pipe(retry(3)).pipe(catchError(this.errorHandler));
//     }
//
//     create(shoppinglist: Shoppinglist): Observable<any> {
//         return this.http.post(`${this.api}/shoppinglist`, shoppinglist)
//             .pipe(retry(3)).pipe(catchError(this.errorHandler));
//     }
//
//     update(shoppinglist: Shoppinglist): Observable<any> {
//         return this.http.put(`${this.api}/shoppinglist/${shoppinglist.id} `, shoppinglist)
//             .pipe(retry(3)).pipe(catchError(this.errorHandler));
//     }
//
//     remove(id: number): Observable<any> {
//         return this.http.delete(`${this.api}/shoppinglist/${id} `)
//             .pipe(retry(3)).pipe(catchError(this.errorHandler));
//     }
//
//   /*  getAllSearch(searchTerm: string): Observable<Array<Shoppinglist>> {
//         return this.http.get<Shoppinglist>(`${this.api}/shoppinglist/search/${searchTerm}`)
//             .pipe(retry(3)).pipe(catchError(this.errorHandler));
//     } */
//
//     private errorHandler(error: Error | any): Observable<any> {
//         return throwError(error);
//     }
//
//     /*getAll(){
//         return this.shoppinglists;
//     }
//
//     getSingle(id : number) : Shoppinglist {
//         return this.shoppinglists.find (shoppinglist => shoppinglist.id == id);
//     }*/
// }


import {Injectable} from '@angular/core' ;
import {Shoppinglist, Item, Comment} from "./shoppinglist" ;
import {HttpClient} from "@angular/common/http" ;
import {Observable, throwError} from "rxjs" ;
import {catchError, retry} from 'rxjs/operators' ;

@Injectable()
export class ShoppinglistCoronaService {
    private api = 'http://coronashopping20.s1710456018.student.kwmhgb.at/api';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Array<Shoppinglist>> {
        return this.http.get(` ${this.api}/shoppinglists`)
            .pipe(retry(3)).pipe(catchError(this.errorHandler))
    }

    getSingle(id: number): Observable<Shoppinglist> {
        return this.http.get <Shoppinglist>(` ${this.api}/shoppinglist/${id} `)
            .pipe(retry(3)).pipe(catchError(this.errorHandler))
    }

    create(shoppinglist: Shoppinglist): Observable<any> {
        return this.http.post(` ${this.api}/shoppinglist`, shoppinglist)
            .pipe(retry(3)).pipe(catchError(this.errorHandler))
    }

    update(shoppinglist: Shoppinglist): Observable<any> {
        return this.http.put(` ${this.api}/shoppinglist/${shoppinglist.id} `, shoppinglist)
            .pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    remove(id: number): Observable<any> {
        return this.http.delete(` ${this.api}/shoppinglist/${id} `)
            .pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    private errorHandler(error: Error | any): Observable<any> {
        return throwError(error);
    }
}