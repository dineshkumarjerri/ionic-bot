// src/app/services/voice-recognition.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as RecordRTC from 'recordrtc';
import { environment } from '../../environments/environment';

interface GoogleSpeechResponse {
  results: {
    alternatives: {
      transcript: string;
    }[];
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {
  private recorder: any;
  private audioBlob?: Blob; // Allowing audioBlob to be undefined

  constructor(private http: HttpClient) {}

  startRecording() {
    const mediaConstraints = {
      video: false,
      audio: true
    };

    navigator.mediaDevices.getUserMedia(mediaConstraints).then(stream => {
      this.recorder = new RecordRTC(stream, {
        type: 'audio',
        mimeType: 'audio/wav',
        sampleRate: 44100,
        recorderType: RecordRTC.StereoAudioRecorder
      });

      this.recorder.startRecording();
    });
  }

  stopRecording() {
    this.recorder.stopRecording(() => {
      this.audioBlob = this.recorder.getBlob();
    });
  }

  getAudioBlob(): Blob | undefined {
    return this.audioBlob;
  }

  sendToGoogleSpeechToText(): Observable<GoogleSpeechResponse> {
    const formData = new FormData();
    if (this.audioBlob) {
      formData.append('file', this.audioBlob, 'audio.wav');
    } else {
      throw new Error('No audio blob available.');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.googleCloudApiKey}`,
      'Content-Type': 'multipart/form-data'
    });

    return this.http.post<GoogleSpeechResponse>('https://speech.googleapis.com/v1/speech:recognize', formData, { headers });
  }
}
