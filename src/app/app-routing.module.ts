import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScoreHandlerComponent} from './Components/score-handler/score-handler.component';

const routes: Routes = [
  {
    path : 'score-panel',
    component : ScoreHandlerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
