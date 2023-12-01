import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Iposts } from '../../models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postform !: FormGroup
  updateid !: string
  postobj !: Iposts
  iseditmode: boolean = false



  constructor(private _routes: ActivatedRoute, private _postservices: PostService,
    private _route: Router) { }

  ngOnInit(): void {

    this.creteapostform()
    this.patchpost()

  }

  creteapostform() {
    this.postform = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required])
    })
  }

  patchpost() {
    this._routes.params
      .subscribe((params: Params) => {
        this.updateid = params['post-id']
        console.log(typeof this.updateid);
        if (this.updateid) {
          this.iseditmode = true
          this._postservices.getsingleobj(this.updateid)
            .subscribe((post: Iposts) => {
              this.postobj = post
              this.postform.patchValue(this.postobj)
            })
        }
      })
  }
  onupdate() {
    if (this.postform.valid && this.iseditmode) {
      let updatepost = { ...this.postform.value, id: this.updateid }
      this._postservices.updatepost(updatepost)
        .subscribe(res => {
          console.log(res);
        })
      this._route.navigate(['/posts'])
    }
  }
  onaddnewpost(){
    if(this.postform.valid && !this.iseditmode){
      let newpost=this.postform.value
      this._postservices.cretenewpost(newpost)
      .subscribe(res=>{
        console.log(res);
        
      })

    }
  }

}

