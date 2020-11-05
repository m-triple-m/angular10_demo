import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages = [];
  constructor(private chatservice: ChatService) { }

  ngOnInit(): void {
    this.chatservice.reciveMsg().subscribe(data => {
      console.log(data);

      this.messages.push(data);
    })
  }

  sendMsg(msg){
    let obj = { message : msg};
    this.chatservice.sendMsg(obj);
    this.messages.push(obj);
  }



}
