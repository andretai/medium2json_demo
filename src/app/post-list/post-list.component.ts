import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CollectionService } from '../../services/collection.service';
import { PostService } from '../../services/post.service';
import { Post } from '../posts';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // Primary display data.
  posts: Post[] = [];
  author: any = {};

  // Secondary display data.
  loading: boolean = false;

  constructor(
    private postService: PostService, 
    private collection: CollectionService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // Subscribe to any change in posts.
    this.postService.postsChange.subscribe(posts => {
      this.posts = posts;
    });
    // Subscribe to any change in posts' author.
    this.postService.authorChange.subscribe(author => {
      this.author = author;
    });
  }

  // Primary display logic.
  
  onUsernameChange(event: any): void {
    // console.log(event)
    this.postService.setPosts(event.newUsername);
    this.postService.setAuthor(event.newUsername);
    this.fakeLoading();
  }

  addToCollection(post: Post, snackBarMsg: string, snackBarAct: string): void {
    this.collection.addToCollection(post);
    this.openSnackBar(snackBarMsg, snackBarAct);
  }

  // Secondary display logic.

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action);
    setTimeout(() => {
      this._snackBar.dismiss()
    }, 1000)
  }

  fakeLoading(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }

}
