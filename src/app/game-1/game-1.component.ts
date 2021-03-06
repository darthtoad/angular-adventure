import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-1',
  templateUrl: './game-1.component.html',
  styleUrls: ['./game-1.component.css'],
  providers: [CharacterService]
})
export class Game1Component implements OnInit {


  characterId: string;
  currentCharacter;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private characterService: CharacterService) { }

  // getFavoriteColor(currentCharacter) {
  //   if (this.currentCharacter.favoriteColor === "red") {
  //     return "color: #FF0000";
  //   } else if (this.currentCharacter.favoriteColor === "orange") {
  //     return "color: #FFA500";
  //   } else if (this.currentCharacter.favoriteColor === "yellow") {
  //     return "color: #ffffE0";
  //   } else if (this.currentCharacter.favoriteColor === "green") {
  //     return "color: #008000";
  //   } else if (this.currentCharacter.favoriteColor === "blue") {
  //     return "color: #0000ff";
  //   } else if (this.currentCharacter.favoriteColor === "pink") {
  //     return "color: #ff69b4";
  //   } else {
  //     return "color: default";
  //   }
  //
  // }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.characterId = urlParameters['id'];
    })
    this.characterService.getCharacterById(this.characterId).subscribe(dataLastEmittedFromObserver => {
     this.currentCharacter = dataLastEmittedFromObserver;
    })
  }

  goTo2() {
    this.router.navigate(['character/' + this.currentCharacter.$key + '/game/2'])
  }

  goTo3() {
    this.router.navigate(['character/' + this.currentCharacter.$key + '/game/3'])
  }

}
