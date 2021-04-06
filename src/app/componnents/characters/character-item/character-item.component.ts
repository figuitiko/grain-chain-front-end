import {Component, Input, OnInit} from '@angular/core';

import {Character} from "../../../models/character";

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss']
})
export class CharacterItemComponent implements OnInit {

  @Input() character: Character;
   isOnline: Boolean = false;



  constructor() {

  }

  ngOnInit(): void {
  }
  setIsOnline(){
    this.isOnline = !this.isOnline;
  }
  getEditedCharacter(e){
    console.log(e);
  }
}
