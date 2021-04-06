import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Character} from "../../../models/character";
import {LocationsService} from "../../../helpers/locations.service";
import {Locations} from "../../../models/locations";
import {Subscription} from "rxjs";
import {CharacterService} from "../../../helpers/character.service";

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.scss']
})
export class CharacterEditComponent implements OnInit, OnDestroy {

  @Input() character: Character;


  locations:Locations;
  isSuccess: boolean;
  isError: boolean;


  messageSuccess: string;
  messageError: string;
  subscriptions: Subscription[] = [];
  constructor(private fb:FormBuilder, private locationsService: LocationsService, private  characterService: CharacterService) {

  }
  ngOnInit(): void {
    this.getAllLocations();


    console.log('this is the character'+this.character.id)
  }
  getAllLocations():void{
    this.subscriptions.push(this.locationsService.getAll()
      .subscribe(locations =>{
        console.log(locations.data)
          this.locations = locations.data;


        }, error => {
          console.log(error)

        }
      ))

  }
  updateCharacter(){


    if(this.character.name || this.character.location){
      this.characterService.updateCharacter(this.character.id, {name: this.character.name, location_id: this.character.location.id})
        .subscribe(response =>{
          console.log(response);




          this.messageSuccess ='The product was updated';
          this.isSuccess= true;
          setTimeout(()=>{
            this.isSuccess=false;
          },2000)


        }, error => {
          this.messageError = 'Ha ocurrido un error'
          this.isError= true;
          setTimeout(()=>{
            this.isError=false;
          },2000)
          }
        )
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.map((element=>element.unsubscribe()));
  }

}
