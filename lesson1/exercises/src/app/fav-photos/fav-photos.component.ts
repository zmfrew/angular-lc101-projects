import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogs-images.forbes.com%2Fdavidhochman%2Ffiles%2F2015%2F03%2Fbreckenridge-1940x1327.jpg&f=1&nofb=1';
  image2 = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_83rZEgX6bQY%2FSwmPJ13XcAI%2FAAAAAAAAJgQ%2Fr2t6074rsT4%2Fs1600%2FGrayton%2BBeach.JPG&f=1&nofb=1';
  image3 = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsonnybou.ca%2Fssbou2013%2Ftimpanogos15.jpg&f=1&nofb=1';

  constructor() { }

  ngOnInit() {
  }

}