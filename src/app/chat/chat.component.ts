import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from '.';
import { Message } from '@stereograph/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('chatInput') public input: ElementRef;
  @ViewChild('name') public name: ElementRef;

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    this.input.nativeElement.focus();
  }

  public sendMessage(): void {
    let name = this.name.nativeElement.value;
    let text = this.input.nativeElement.value;
    this._chatService.sendMessage(name, text);
    this.input.nativeElement.value = '';
    this.input.nativeElement.focus();
  }

  public handleKeyup(event: KeyboardEvent): void {
    if(event.which === 13) {
      this.sendMessage();
    }
  }

  public randomName(): string {
    let now = Date.now();
    return 'user-' + now;
  }

}
