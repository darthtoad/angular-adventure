import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-new',
  templateUrl: './character-new.component.html',
  styleUrls: ['./character-new.component.css']
})
export class CharacterNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(newName: string, favoriteColor: string, sushi: boolean) {
    const newCharacter: Character = new Character(newName, favoriteColor, sushi);
    this.characterService.addCharacter(newCharacter);
  }

}
