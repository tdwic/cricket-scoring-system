import {Component, Input, OnInit} from '@angular/core';
import {InteractionServiceService} from '../../interaction-service.service';

@Component({
  selector: 'app-score-publisher',
  templateUrl: './score-publisher.component.html',
  styleUrls: ['./score-publisher.component.css']
})
export class ScorePublisherComponent implements OnInit {

  channel = new BroadcastChannel('channel-name');
  Messagess : string
  sdessagess : string

  constructor(private _messageServie : InteractionServiceService) { }

  ngOnInit(): void {

    this.channel.addEventListener('message',e =>{
      this.Messagess = e.data;
    })
  }

}
