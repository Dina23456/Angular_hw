import { Component, OnInit } from '@angular/core';
import {Post} from '../../../model/Post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {

  post: Post;

  constructor(private  router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      console.log('dfgfd');
      this.post = this.router.getCurrentNavigation().extras.state as Post;

    });
  }

  ngOnInit(): void {
  }

}
