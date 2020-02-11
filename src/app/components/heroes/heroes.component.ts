import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes : Hero[] = [];

    constructor( private _heroesService: HeroesService ) {
        console .log( 'constructor' );
    }

    ngOnInit() {
        this .heroes = this ._heroesService .getAll();
        console .log( 'ngOnInit', this .heroes );
    }

}
