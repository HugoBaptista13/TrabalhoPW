import { Component } from '@angular/core';
import { AudioService } from "../../audio.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { RouterLink } from "@angular/router";

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

  constructor(private audioService: AudioService) {}

  audio(audioId: string) {
    this.audioService.audio(audioId);
  }

  pesquisaDistrito()
  {
      let selectedDistrito : string = (document.getElementById('distritos') as HTMLSelectElement).value
      let museus = document.querySelectorAll('.col-md-12.mb-4');

      museus.forEach(function (museu) {
        let distrito: string;
        distrito = museu.querySelector('i')?.textContent || '';
        distrito = distrito.trim();

        if (selectedDistrito === 'todos' || distrito === selectedDistrito) {
          (museu as HTMLElement).style.display = 'block';
        } else {
          (museu as HTMLElement).style.display = 'none';
        }
      });
  }
}

