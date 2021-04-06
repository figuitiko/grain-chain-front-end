import { Component, OnInit } from '@angular/core';
import {Episode} from "../../../models/episode";

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {

  episodes:Array<Episode> = [
    {serial: 12345,name: "pilot", airDate: "Dec, 7, 2015"},
    {serial: 78963,name: "hello", airDate: "Feb, 12, 2016"},
    {serial: 12312,name: "goal", airDate: "Mar, 9, 2018"},
    {serial: 65545,name: "ok ok", airDate: "Jan, 12, 2019"},
    {serial: 12356,name: "goal", airDate: "Feb, 12, 2018"},
    {serial: 65456,name: "free", airDate: "Apr, 10, 2015"},
    {serial: 67890,name: "go go", airDate: "Nov, 7, 2019"},
    {serial: 67890,name: "go go", airDate: "Nov, 7, 2019"},
    {serial: 67890,name: "go go", airDate: "Nov, 7, 2019"},
    {serial: 67890,name: "go go", airDate: "Nov, 7, 2019"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
