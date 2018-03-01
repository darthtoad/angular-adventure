import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-11',
  templateUrl: './game-11.component.html',
  styleUrls: ['./game-11.component.css'],
  providers: [CharacterService]
})
export class Game11Component implements OnInit {

  characterId: string;
  currentCharacter;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private characterService: CharacterService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.characterId = urlParameters['id'];
    })
    this.characterService.getCharacterById(this.characterId).subscribe(dataLastEmittedFromObserver => {
     this.currentCharacter = dataLastEmittedFromObserver;
    })
  }

  goTo13() {
    this.router.navigate(['character/' + this.currentCharacter.$key + '/game/13'])
  }

  goTo14() {
    this.router.navigate(['character/' + this.currentCharacter.$key + '/game/14'])
  }

}
