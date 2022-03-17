import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/services/collection.service';
import { MatDialog } from '@angular/material/dialog';
import { GuideComponent } from './guide/guide.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'medium2json_demo';

  // For displaying number of items in collection on the corner of the collection button.
  numberOfItems: number = 0;

  constructor(private collection: CollectionService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.collection.itemsChange.subscribe(items => {
      this.numberOfItems = items.length;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(GuideComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
