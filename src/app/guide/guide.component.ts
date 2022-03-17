import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  // 
  steps: Array<any> = [
    { icon: 'search', text: "Enter a valid username (\"username.medium.com\") and click 'Search'." },
    { icon: 'mouse', text: "Look for the articles that you want and click 'Add to Collection'." },
    { icon: 'shopping_cart', text: "Click 'Collection' (top-right corner) and navigate to the collection page." },
    { icon: 'delete', text: "Go through the collection of articles and remove unwanted articles (if any)." },
    { icon: 'file_download', text: "At the bottom of the collection, click 'Export' to generate a JSON file of the collection." }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  

}
