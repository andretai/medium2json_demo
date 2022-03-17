import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { Post } from '../posts';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  // Primary display data.
  items: Post[] = [];

  // Secondary display data.
  loading: boolean = false;

  constructor(private collection: CollectionService) {}

  ngOnInit(): void {
    this.collection.itemsChange.subscribe(items => {
      this.items = items;
    });
  }

  // Primary display logic.
  removeFromCollection(index: number): void {
    this.collection.removeItem(index);
  }

  clearCollection(): void {
    this.loading = true;
    this.collection.clearCollection()
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }

  exportFile(): void {
    let data = JSON.stringify(this.items, null, 2);
    let meta = 'data:application/json; charset=utf-8,' + encodeURIComponent(data);
    let filename = 'file.json';
    let link = document.createElement('a');
    link.setAttribute('href', meta);
    link.setAttribute('download', filename);
    link.click();
  }

  // previewJSONFile(): string {
  //   return JSON.stringify(this.items, null, 2);
  // }

  // Secondary display logic.
  fakeLoading(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }

}
