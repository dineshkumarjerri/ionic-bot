// src/app/voice-input/voice-input.component.ts

import { Component } from '@angular/core';
import { VoiceRecognitionService } from '../../services/voice-recognition.service';

interface GoogleSpeechResponse {
  results: {
    alternatives: {
      transcript: string;
    }[];
  }[];
}

@Component({
  selector: 'app-voice-input',
  templateUrl: './voice-input.component.html',
  styleUrls: ['./voice-input.component.css']
})
export class VoiceInputComponent {
  transcript: string = '';

  constructor(private voiceService: VoiceRecognitionService) {}

  startRecording() {
    this.voiceService.startRecording();
  }

  stopRecording() {
    this.voiceService.stopRecording();
    this.voiceService.sendToGoogleSpeechToText().subscribe(
      (response: GoogleSpeechResponse) => {
        this.transcript = response.results.map(result => result.alternatives[0].transcript).join('\n');
      },
      (error) => {
        console.error('Error transcribing audio:', error);
      }
    );
  }
}
