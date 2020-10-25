import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScoreHandlerComponent} from './Components/score-handler/score-handler.component';
import {ScorePublisherComponent} from './Components/score-publisher/score-publisher.component';
import {ScorePreviewerComponent} from './Components/score-previewer/score-previewer.component';
import {TeamCreationComponent} from './Components/team-creation/team-creation.component';
import {TeamOneCreationComponent} from './Components/team-creation/team-one-creation/team-one-creation.component';
import {TeamTwoCreationComponent} from './Components/team-creation/team-two-creation/team-two-creation.component';

const routes: Routes = [
  {
    path : 'score-panel',
    component : ScoreHandlerComponent
  },
  {
    path : 'score-publish',
    component : ScorePublisherComponent
  },
  {
    path : 'score-previewer',
    component : ScorePreviewerComponent
  },
  {
    path : 'team-creation',
    component : TeamCreationComponent
  },
  {
    path : 'team-one-creation',
    component : TeamOneCreationComponent
  },
  {
    path : 'team-two-creation',
    component : TeamTwoCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
