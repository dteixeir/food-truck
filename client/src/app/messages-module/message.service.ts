import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];
  topMessage: string;

  add(message: string) {
    this.messages.push(message);
    this.topMessage = message;
  }

  clear() {
    this.messages = [];
  }

  pop() {
    this.messages.pop();
    this.topMessage = this.messages[this.messages.length - 1];
  }
}
