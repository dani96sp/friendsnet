import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Post } from '../../models/post.model';

const UrlBase = 'http://localhost:3000/posts';

@Injectable()
export class MisHistorietasService {


    constructor(private http: Http) { }

    getHistorietas(): Observable<Post[]> {
        return this.http.get(UrlBase)
        .map( (res: Response) => res.json() )
        .catch( (error: any) => Observable.throw(error.json().error || 'server error') );
    }

    addHistorieta(post: Post): Observable<Post[]> {
        const headers = new Headers({ 'Content-Type': 'application/json'});
        const options = new RequestOptions({ headers: headers });

        return this.http.post(UrlBase, post, options)
        .map( (res: Response) => res.json() )
        .catch( (error: any) => Observable.throw(error.json().error || 'server error') );
      }

}
