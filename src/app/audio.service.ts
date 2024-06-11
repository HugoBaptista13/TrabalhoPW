import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  stopAllAudios() {
    let audioElements = document.getElementsByTagName('audio');
    for (let i = 0; i < audioElements.length; i++) {
      let audio = audioElements[i] as HTMLAudioElement;

      audio.pause();
      audio.currentTime = 0;
    }
  }

  isAudioPlaying(): boolean {
    let audioElements = document.getElementsByTagName('audio');
    for (let i = 0; i < audioElements.length; i++) {
      let audio = audioElements[i] as HTMLAudioElement;
      if (!audio.paused) {
        return true;
      }
    }
    return false;
  }



  audio(audioId: string) {
    let audioElement = document.getElementById(audioId);
    if (!audioElement) {
      console.error(`Elemento de áudio com ID ${audioId} não encontrado`);
      return;
    }
    let audio = audioElement as HTMLAudioElement;
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      this.stopAllAudios();
      audio.play().then(r => {});
    }
  }
}
