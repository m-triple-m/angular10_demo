import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket;
  url = 'http://localhost:5000'

  constructor() {
    this.connect();
  }

  connect(){
    this.socket = io(this.url);
  }

  sendMsg(obj){
    this.socket.emit('send', obj);
  }

  reciveMsg(){
    return new Observable((observer) => {
      this.socket.on('rec_msg', (data) => {
        observer.next(data);
      })
    });
  }

}
