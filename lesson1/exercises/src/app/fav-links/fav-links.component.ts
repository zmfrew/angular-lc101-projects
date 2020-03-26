import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = [
    'https://developer.apple.com',
    'https://www.swiftbysundell.com',
    'https://www.hackingwithswift.com'
  ]

  constructor() { }

  ngOnInit() {
  }

}
