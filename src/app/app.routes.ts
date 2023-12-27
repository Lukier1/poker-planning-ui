import { Routes } from '@angular/router';
import { BoardPageComponent } from './board-page/board-page.component';
export const routes: Routes = [{
    path: 'rooms/:roomId', component: BoardPageComponent
  },];
