import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iposts } from '../../models/post';
import { PostService } from '../../services/post.service';
import { Observable, Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postid !: string
  postobj !: Iposts
skills :Array<string>=[]
intervalsub !:Subscription

  constructor(private _routes: ActivatedRoute,
    private _postservice: PostService, private _router:Router) { }

  ngOnInit() {
this.getsingleid();
let intevarl$=interval(1000); // it is return oberverable so it most impotant subscrpie
console.log(intevarl$);
this._postservice.skill$
.subscribe(res=>{
  // console.log(res);
  this.skills.push(res)
  
})

intevarl$.subscribe((res=>{
// console.log(res);

}))
  }

  getsingleid() {
    this._routes.params
      .subscribe((params: Params) => {
        this.postid = params['post-id']
        console.log(this.postid);
        // api call 
        if (this.postid) {
          this._postservice.getsingleobj(this.postid)
            .subscribe(res => {
              this.postobj = res
            })
        }
      })
  }

  ondelete(){
    let geconfirm=confirm(`are you sure,you want remove this post`)
   if(geconfirm){
    this._postservice.deletepost(this.postid)
    .subscribe(res=>{
      this._router.navigate(['posts'])
    })
   }
  }
}
