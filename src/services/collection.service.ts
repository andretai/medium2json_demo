import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Post } from '../app/posts';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  items: Post[] = [];

  itemsChange: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  constructor() {
    this.itemsChange.subscribe(value => {
      this.items = value
    })
  }

  getItems(): Post[] {
    return this.items;
  }

  addToCollection(post: Post): void {
    this.itemsChange.next([...this.items, post]);
  }

  removeItem(index: number): void {
    let items = this.items;
    items.splice(index, 1);
    this.itemsChange.next([...items]);
  }

  clearCollection(): void {
    this.itemsChange.next([]);
  }

}
