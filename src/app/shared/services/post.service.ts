import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval, map, observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iposts } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posturl = `${environment.baseurl}/posts`;
  constructor(private _http: HttpClient) { }

  getallpost(): Observable<Array<Iposts>> {
    return this._http.get<Array<Iposts>>(this.posturl)
  }
  getsingleobj(id: string): Observable<Iposts> {
    let singlepostul = `${this.posturl}/${id}`
    return this._http.get<Iposts>(singlepostul)
  }
  updatepost(post: Iposts): Observable<Iposts> {
    let updateurl = `${this.posturl}/${post.id}`
    return this._http.patch<Iposts>(updateurl, post)
  }
  cretenewpost(post: Iposts): Observable<Iposts> {
    return this._http.post<Iposts>(this.posturl, post)
  }
  deletepost(id: string): Observable<null> {
    let deleteurl = `${this.posturl}/${id}`
    return this._http.delete<null>(deleteurl)
  }


  skill$ = of("html", "css", "angular", "javascript")
    .pipe(
      map(skill => {
        return `i love  ${skill}`

      })
    )
}
