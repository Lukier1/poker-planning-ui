import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/rooms.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { User } from '../services/rooms.model';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table'; 
  

const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
];

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss'],
  standalone: true,
  imports: [CommonModule, MatTableModule],
  providers: [RoomService]
})
export class BoardPageComponent implements OnInit {
  public readonly dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['position'];

  readonly selectedUserId = "ac6667b0-8b4b-4e18-bb83-bf02cbde891f";

  isLoading = true;
  room$ = this.activatedRoute.params
    .pipe(map(params => params['roomId']),
      mergeMap(roomId =>  this.roomService.getRoom(roomId)));

  constructor( private readonly roomService: RoomService,
    private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  isSelectedUser(user: User): boolean { 
    return user.id == this.selectedUserId;
  }

}
