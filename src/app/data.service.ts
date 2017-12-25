import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor( private http:Http ) { }

  fetchData(){
    return this.http.get('https://angular-data-2a201.firebaseio.com/.json').map(
      (res) => res.json()
    );
  }

}
