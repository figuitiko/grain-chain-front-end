import {Component, Input, OnInit} from '@angular/core';
import {Episode} from "../../../models/episode";

@Component({
  selector: 'app-episodes-item',
  templateUrl: './episodes-item.component.html',
  styleUrls: ['./episodes-item.component.scss']
})
export class EpisodesItemComponent implements OnInit {
  @Input() episode:Episode;
  constructor() { }

  ngOnInit(): void {
  }

}
