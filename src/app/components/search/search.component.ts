import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
      private _activatedRoute: ActivatedRoute
  ) {
      console .log( 'SearchComponent' );
  }

  ngOnInit() {
      this ._activatedRoute .params .subscribe( params => {
          console .log( 'Params', params );
      });
  }

}
