import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information = null;

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    console.log('ID before request: ', id);

    this.moviesService.getDetails(id).subscribe(result => {
      console.log('ID: ', id);
      console.log('details', result);
      this.information = result;
    });
  }

  openWebSite() {
    window.open(this.information.Website, '_blank');
  }



}
