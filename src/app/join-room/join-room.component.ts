import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { RoomService } from '../services/rooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent implements OnInit {

  private _onLoading = false; 

  get onLoading() {
    return this._onLoading;
  }

  joinRoomForm = this.formBuilder.group({
   username: '', 
   roomId: ''
  })

  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private roomService: RoomService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this._onLoading = true;
    
    const {roomId, username} = this.joinRoomForm.value; 
    
    this.roomService.joinRoom(roomId, username)
      .subscribe({next: (user) => {
        this.router.navigate(['rooms', roomId]);
      }, complete: () => {
        this._onLoading = false;
      }});
  }
}
