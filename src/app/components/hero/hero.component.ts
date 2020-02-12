import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/** Providers/Services */
import { HeroesService, Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

    private hero : Hero;
    private franchiseUrl : String;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _heroesService: HeroesService
    ) {
        /** Obtiene los parametros enviados (Regresa un Observer 'similar' a una Promesa) por lo que tenemos que subscribirnos a dicho Observer usando subscribe() */
        this ._activatedRoute .params .subscribe( params => {
            console .log( 'Parametros recibidos', params );

            /** Obtenemos el Heroe en la posición pasada como parametro, parametrizada con el nombre id al método del Service que obtiene ese dato */
            this .hero = this ._heroesService .getByPosition( params[ 'id' ] );
            this .franchiseUrl = this .getFranchiseUrl( this .hero .franchise );
            console .log( 'Hero', this .hero );

        });
    }

    ngOnInit() {
    }

    getFranchiseUrl( franchise ) : String {
        let url : String;

        switch( franchise .toLowerCase() ) {
            case 'dc comics':
                url = './assets/images/dc-comics.png';
                break;
            case 'marvel comics':
                url = './assets/images/marvel-comics.png';
                break;
            default:
                url = '';
                break;
        }

        return url;
    }

}
