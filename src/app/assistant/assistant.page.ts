import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.model';


@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.page.html',
  styleUrls: ['./assistant.page.scss'],
})
export class AssistantPage implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';
  recognizing: boolean = false;
  botTyping: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
      this.messages = JSON.parse(storedMessages);
    } else {
      this.messages.push({
        sender: 'Assistant',
        text: 'Hello! How can I assist you today?',
        avatar: 'assets/avatar-assistant.png'
      });
    }

    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        this.recognizing = true;
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        this.newMessage = transcript;
        this.sendMessage();
      };

      recognition.onerror = (event: any) => {
        console.error(event.error);
      };

      recognition.onend = () => {
        this.recognizing = false;
      };

      this.startRecognition = () => {
        if (!this.recognizing) {
          recognition.start();
        }
      };
    }
  }

  startRecognition() {}

  sendMessage() {
    if (this.newMessage.trim()) {
      const userMessage: Message = { sender: 'You', text: this.newMessage, avatar: 'assets/avatar-user.png' };
      this.messages.push(userMessage);
      this.newMessage = '';
      this.saveMessages();

      this.botTyping = true;

      // Call Vertex AI API (mocked here for simplicity)
      this.http.post('https://vertex-ai-api-endpoint', { query: userMessage.text })
        .subscribe((response: any) => {
          const assistantMessage: Message = {
            sender: 'Assistant',
            text: response.reply,
            avatar: 'assets/avatar-assistant.png',
            image: response.image || null,
            link: response.link || null
          };
          this.messages.push(assistantMessage);
          this.saveMessages();
          this.botTyping = false;
        });
    }
  }

  saveMessages() {
    localStorage.setItem('messages', JSON.stringify(this.messages));
  }
}
