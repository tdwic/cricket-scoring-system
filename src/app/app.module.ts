import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ScoreHandlerComponent } from './Components/score-handler/score-handler.component';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import { ScorePublisherComponent } from './Components/score-publisher/score-publisher.component';
import { ScorePreviewerComponent } from './Components/score-previewer/score-previewer.component';
import {HttpClientModule} from '@angular/common/http';
import { TeamCreationComponent } from './Components/team-creation/team-creation.component';
import { TeamOneCreationComponent } from './Components/team-creation/team-one-creation/team-one-creation.component';
import { TeamTwoCreationComponent } from './Components/team-creation/team-two-creation/team-two-creation.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatchCreationComponent } from './Components/match-creation/match-creation.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import { AddNewBowlerComponent } from './Components/score-handler/add-new-bowler/add-new-bowler.component';
import { AddNewBatsmanComponent } from './Components/score-handler/add-new-batsman/add-new-batsman.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreHandlerComponent,
    ScorePublisherComponent,
    ScorePreviewerComponent,
    TeamCreationComponent,
    TeamOneCreationComponent,
    TeamTwoCreationComponent,
    MatchCreationComponent,
    AddNewBowlerComponent,
    AddNewBatsmanComponent
  ],

    entryComponents:[
      TeamOneCreationComponent,
      TeamTwoCreationComponent,
      MatchCreationComponent,
      AddNewBatsmanComponent,
      AddNewBowlerComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatChipsModule,
    MatTabsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
    MatListModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
