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

  ngOnInit() {
  }

}
