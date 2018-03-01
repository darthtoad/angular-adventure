import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-new',
  templateUrl: './character-new.component.html',
  styleUrls: ['./character-new.component.css'],
  providers: [CharacterService]
})

export class CharacterNewComponent implements OnInit {

  currentRoute: string = this.router.url;

  constructor(private router: Router, private characterService: CharacterService) { }

  ngOnInit() {
  }

  submitForm(newName: string, favoriteColor: string, sushi: string) {
    const newCharacter: Character = new Character(newName, favoriteColor.toLowerCase(), sushi);
    const characterKey: string = this.characterService.addCharacter(newCharacter);

    this.router.navigate(['character/' + characterKey + '/game/1']);
  }

}
