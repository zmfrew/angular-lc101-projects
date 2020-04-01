import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   jokeHeading = "Joke Buttons"
   isGoldActive: boolean = true;
   isSilverActive: boolean = true;
   isCopperActive: boolean = true;

   active = true
   location = 'center'

   constructor() { }

   ngOnInit() { }

   activateButtons() {
      this.isGoldActive = true
      this.isSilverActive = true
      this.isCopperActive = true
   }

   shiftLocation(oldLocation: string) {
      while (this.location === oldLocation) {
         this.location = ['left', 'right', 'center'][Math.floor(Math.random() * 3)];
      }

      return this.location;
   }
}
