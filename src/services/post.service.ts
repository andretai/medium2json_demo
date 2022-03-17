declare var require: any

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../app/posts';

const medium2json = require('medium2json');

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  author: object = {};

  postsChange: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  authorChange: BehaviorSubject<object> = new BehaviorSubject<object>({});

  constructor() {
    this.postsChange.subscribe(posts => {
      this.posts = posts
    })
  }

  async setAuthor(username: string) {
    const author = await medium2json.getFeed(username);
    if (author === undefined) {
      this.authorChange.next({});
    }
    this.authorChange.next(author);
  }

  async setPosts(username: string) {
    const posts = await medium2json.getPosts(username);
    if (posts === undefined) {
      this.postsChange.next([]);
    }
    this.postsChange.next(posts);
  }
  
}
