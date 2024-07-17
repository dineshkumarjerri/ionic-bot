import { Injectable } from '@angular/core';
import { Dexie } from 'dexie';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends Dexie {
  private messages: Dexie.Table<Message, number>;

  constructor() {
    super('MessageDatabase');
    this.version(1).stores({
      messages: '++id,sender,text,avatar,timestamp,*context'
    });
    this.messages = this.table('messages');
  }

  async addMessage(message: Message): Promise<number> {
    message.timestamp = Date.now();
    return await this.messages.add(message);
  }

  async getAllMessages(): Promise<Message[]> {
    return await this.messages.toArray();
  }

  async deleteAllMessages(): Promise<void> {
    await this.messages.clear();
  }
}
