import { Component } from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faMapMarkerAlt, faCalendarAlt, faTicket} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  faLocation = faMapMarkerAlt;
  faCalendar = faCalendarAlt;
  faTicket = faTicket;

  playAudio(audioId: string)
  {
    // Obtém o elemento de áudio com o ID especificado
    let audioElement = document.getElementById(audioId);

    if (!audioElement) {
      console.error(`Elemento de áudio com ID ${audioId} não encontrado`);
      return;
    }
    let audio = audioElement as HTMLAudioElement;


    // Se o áudio estiver em execução, pausa a reprodução
    if (!audio.paused) {
      audio.pause();
      // Define o tempo de reprodução como 0 para reiniciar o áudio
      audio.currentTime = 0;
    } else {
      // Se o áudio estiver pausado, inicia a reprodução
      audio.play().then(r => {});
    }
  }

}
