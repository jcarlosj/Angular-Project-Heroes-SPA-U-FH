import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    heroes : Hero[] = [];

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _heroesService: HeroesService
    ) {
        console .log( 'HeroesService listo para usarse' );
    }

    ngOnInit() {
        this ._activatedRoute .params .subscribe( params => {
            console .log( 'Params', params );

            /** Obtenemos el Heroe que coincide con el termino de busqueda, parametrizada con el nombre 'term' al método del Service que obtiene ese dato */
            this .heroes = this ._heroesService .search( params[ 'term' ]);
            console .log( 'Found this Heroes', this .heroes );
        });
    }

}
