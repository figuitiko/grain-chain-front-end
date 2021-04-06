import {Component, OnDestroy, OnInit} from '@angular/core';
import {CharacterService} from "../../../helpers/character.service";
import {Character} from "../../../models/character";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {PaginationConfig} from "../../../models/paginationConfig";
import {Collection} from "ngx-pagination/dist/paginate.pipe";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {

  constructor(private characterService : CharacterService, private router:Router) { }
  collection:Collection<any>

  isView:boolean = false;
  subscriptions: Subscription[] = [];
  config:PaginationConfig = {
    id: 'basicPaginate',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0
  }


  ngOnInit(): void {

    this.getCharacters();

  }
     getCharacters():void  {
    this.subscriptions.push(
      this.characterService.getAll()
        .subscribe(characters=>{
        console.log(characters);

          if(characters.status ){
            this.router.navigateByUrl('/');
          }

            this.collection = characters.data.data;


            this.config= {
              id: 'basicPaginate',
              itemsPerPage: 5,
              currentPage: 1,
              totalItems:characters.data.data.length
            }


          },
          error => {
            console.log(error)
          })
    )

  }


  setIsView(){
    this.isView = !this.isView;
  }
  pageChanged(e){
    this.config.currentPage = e;
  }
  ngOnDestroy(): void {
    this.subscriptions.map((element=>element.unsubscribe()));
  }

}
