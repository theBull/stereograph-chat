import { Injectable } from '@angular/core';
import { List, WebSocketService, Message } from '@stereograph/core';

@Injectable()
export class ChatService {

  public messages: List<Message>;

  constructor(private _webSocketService: WebSocketService) { 
    this.messages = new List<Message>();

    this._webSocketService.initialize(() => {

    }, (message: Message) => {
      this.messages.add(message);
    });
  }

  public sendMessage(name: string, text: string): void {
    let message = new Message();
    message.fromJson({name: name, text: text});
    this._webSocketService.sendMessage(message.toJson());
  }
}
