import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes : Hero[] = [];

    constructor(
        private _heroesService: HeroesService,
        private _router: Router
    ) {
        console .log( 'constructor' );
    }

    ngOnInit() {
        this .heroes = this ._heroesService .getAll();
        console .log( 'ngOnInit', this .heroes );
    }

    showHero( idx: number ) {
        console .log( 'i', idx );
        this ._router .navigate([ '/hero', idx ]);      // Redireccionamos al Componente Hero enviando el ID respectivo usando en Router de Angular
    }

}
