import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardPageComponent } from './board-page/board-page.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JoinRoomComponent } from './join-room/join-room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomService } from './services/rooms.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardPageComponent,
    JoinRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RoomService,
    JoinRoomComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
