import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../model/Post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  url1 = `http://jsonplaceholder.typicode.com/posts`;
  constructor(private httpClien: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.httpClien.get<Post[]>(this.url1);
  }

}
