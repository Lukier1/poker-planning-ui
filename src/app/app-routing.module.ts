import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardPageComponent } from './board-page/board-page.component';
import { JoinRoomComponent } from './join-room/join-room.component';

const routes: Routes = [{
  path: 'rooms/:roomId', component: BoardPageComponent
},
{
  path: '', component: JoinRoomComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
