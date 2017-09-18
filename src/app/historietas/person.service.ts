import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Post } from '../models/post.model';
import { Person } from '../models/person.model';

const UrlBase =  'http://localhost:3000/persons/1';

@Injectable()
export class PersonService {

  constructor(private http: Http) { }
  getPerson(): Observable<Person> {
    return this.http.get(UrlBase)
    .map( (res: Response) => res.json() )
    .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );
  }

}
