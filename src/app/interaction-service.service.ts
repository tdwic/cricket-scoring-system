import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionServiceService {

  private _messageSource = new Subject<string>();
  message$ = this._messageSource.asObservable();

  constructor() { }

  sendMessage(messages:string){
    this._messageSource.next(messages);
  }
}
