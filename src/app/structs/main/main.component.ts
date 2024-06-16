import { Component } from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { AudioService} from "../../audio.service";
import {faMapMarkerAlt, faCalendarAlt, faTicket} from "@fortawesome/free-solid-svg-icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  faLocation = faMapMarkerAlt;
  faCalendar = faCalendarAlt;
  faTicket = faTicket;

  constructor(private audioService: AudioService) {}

  playAudio(audioId: string) {
    this.audioService.audio(audioId);
  }

}
