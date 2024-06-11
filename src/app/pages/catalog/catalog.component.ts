import { Component } from '@angular/core';
import { AudioService } from "../../audio.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  faStarHalf = faStar;
  faLocation = faMapMarkerAlt;



  constructor(private audioService: AudioService) { }

  audio(audioId: string) {
    this.audioService.audio(audioId);
  }
}
