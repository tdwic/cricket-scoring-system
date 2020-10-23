import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScoreHandlerComponent} from './Components/score-handler/score-handler.component';
import {ScorePublisherComponent} from './Components/score-publisher/score-publisher.component';

const routes: Routes = [
  {
    path : 'score-panel',
    component : ScoreHandlerComponent
  },
  {
    path : 'score-publish',
    component : ScorePublisherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
