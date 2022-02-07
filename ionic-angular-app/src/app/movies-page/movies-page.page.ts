import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService, SearchType } from '../services/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.page.html',
  styleUrls: ['./movies-page.page.scss'],
})
export class MoviesPagePage implements OnInit {

  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;

  constructor(private moviesService: MoviesService) {
    this.results = this.moviesService.initialLoad('Friends', SearchType.all);
   }

  ngOnInit() {
  }

  searchChanged(){
    this.results = this.moviesService.searchData(this.searchTerm, this.type);
  }

}
