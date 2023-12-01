import { Component, OnInit } from '@angular/core';
import { Iposts } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-dashbored',
  templateUrl: './post-dashbored.component.html',
  styleUrls: ['./post-dashbored.component.scss']
})
export class PostDashboredComponent implements OnInit {
postarray:Array<Iposts>=[]
  constructor( private _postsservices:PostService) { }

  ngOnInit() {
    this.getallpost()
 
  }

getallpost(){
  this._postsservices.getallpost()
  .subscribe(res=>{
   this.postarray=res
   
  })
}

}
