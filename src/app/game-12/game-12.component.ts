import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-12',
  templateUrl: './game-12.component.html',
  styleUrls: ['./game-12.component.css'],
  providers: [CharacterService]
})
export class Game12Component implements OnInit {

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

  goTo15() {
    this.router.navigate(['character/' + this.currentCharacter.$key + '/game/15'])
  }

  goTo16() {
    this.router.navigate(['character/' + this.currentCharacter.$key + '/game/16'])
  }

  goTo17() {
    this.router.navigate(['character/' + this.currentCharacter.$key + '/game/17'])
  }

  goTo18() {
    this.router.navigate(['character/' + this.currentCharacter.$key + '/game/18'])
  }

  goTo19() {
    this.router.navigate(['character/' + this.currentCharacter.$key + '/game/19'])
  }

  goTo20() {
    this.router.navigate(['character/' + this.currentCharacter.$key + '/game/20'])
  }

  goTo21() {
    this.router.navigate(['character/' + this.currentCharacter.$key + '/game/21'])
  }

  goTo22() {
    this.router.navigate(['character/' + this.currentCharacter.$key + '/game/22'])
  }

  goTo23() {
    this.router.navigate(['character/' + this.currentCharacter.$key + '/game/23'])
  }

  goTo24() {
    this.router.navigate(['character/' + this.currentCharacter.$key + '/game/24'])
  }
}
