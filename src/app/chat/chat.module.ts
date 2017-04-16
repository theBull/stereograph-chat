import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSocketModule } from '@stereograph/core';

// ---
// Components
// ---
import { ChatComponent } from '.';

// ---
// Services
// ---
import { ChatService } from '.';

@NgModule({
  imports: [
    CommonModule,
    WebSocketModule
  ],
  declarations: [
    ChatComponent
  ],
  providers: [
    ChatService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [ 
    ChatComponent
  ],
  bootstrap: [
    ChatComponent
  ]
})
export class ChatModule { }
