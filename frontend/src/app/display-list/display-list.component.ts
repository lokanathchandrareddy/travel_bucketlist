import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';
import { List } from '../models/List';



@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  private lists: List[] = [];
  
  constructor(private listServ: ListService) {}

  ngOnInit() {
    this.loadLists();
  }

  public loadLists(){
    this.listServ.getAllLists().subscribe(
      response => this.lists = response,
    )
  }

  public deleteList(list:List) {
    this.listServ.deleteList(list._id).subscribe(
      response => this.lists = this.lists.filter(lists => lists !== list),
    )
  }
}
