import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor( private _router: Router ) {}

    ngOnInit() {}

    searchHero( term: string ) {
        console .log( 'Termino de busqueda', term );
        this ._router .navigate([ '/search', term ]);      // Redireccionamos al Componente Search enviando el 'term' respectivo usando en Router de Angular
    }
}
