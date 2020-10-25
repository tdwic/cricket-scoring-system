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

@NgModule({
  declarations: [
    AppComponent,
    ScoreHandlerComponent,
    ScorePublisherComponent,
    ScorePreviewerComponent,
    TeamCreationComponent,
    TeamOneCreationComponent,
    TeamTwoCreationComponent
  ],

    entryComponents:[
      TeamOneCreationComponent,
      TeamTwoCreationComponent
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
    MatInputModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
