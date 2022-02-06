import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

//Movie Search Type
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = 'https://www.omdbapi.com';
  apiKey = '546832d';

  constructor(private http: HttpClient) { }


  searchData(title: string, type: SearchType): Observable<any>{
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => {
        console.log('Data: ', results);
        return results['Search'];
      })
    );
  }

  getDetails(id: string){
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

}
