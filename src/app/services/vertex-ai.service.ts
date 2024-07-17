import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VertexAiService {

  private readonly baseUrl = environment.vertexAiApiEndpoint;

  constructor(private http: HttpClient) { }

  sendMessage(query: string, context: string[]): Promise<any> {
    const mockResponse = this.getMockResponse(query, context);
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve(mockResponse);
      }, 1000); // Simulate delay
    });
  }

  private getMockResponse(query: string, context: string[]): any {
    return {
      reply: 'Here is a mock response based on your input.',
      image: null,
      link: null
    };
  }
}
