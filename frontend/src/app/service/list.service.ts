import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

import { List } from '../models/List'
// import { map } from 'rxjs/operators';

@Injectable()
export class ListService {

  constructor(private http: Http) { }

  private serverApi = 'http://localhost:3000';

  public getAllLists(): Observable<List[]> {

    let URI = `${this.serverApi}/bucketlist/`;
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <List[]>res.lists);
  }

  public deleteList(listId: string) {
    let URI = `${this.serverApi}/bucketlist/${listId}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.delete(URI, { headers })
      .map(res => res.json());
  }
}