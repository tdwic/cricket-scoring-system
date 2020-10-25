import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-score-publisher',
  templateUrl: './score-publisher.component.html',
  styleUrls: ['./score-publisher.component.css']
})
export class ScorePublisherComponent implements OnInit {

  channel = new BroadcastChannel('channel-name');
  Messagess : string
  sdessagess : string
  trigger: boolean

  constructor() { }

  ngOnInit(): void {

    this.channel.addEventListener('message',e =>{
      console.log(e.data);
      this.Messagess = e.data.name;
      this.trigger = true;
    })
  }

}
