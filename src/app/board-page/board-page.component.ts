import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/rooms.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../services/rooms.model';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
  readonly selectedUserId = "ac6667b0-8b4b-4e18-bb83-bf02cbde891f";

  isLoading = true;
  room$ = this.activatedRoute.params
    .pipe(map(params => params.roomId),
      mergeMap(roomId =>  this.roomService.getRoom(roomId)));

  constructor( private readonly roomService: RoomService,
    private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  isSelectedUser(user: User): boolean { 
    return user.id == this.selectedUserId;
  }

}
