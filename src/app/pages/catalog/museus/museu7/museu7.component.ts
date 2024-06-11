import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu7',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu7.component.html',
  styleUrl: './museu7.component.css'
})
export class Museu7Component {

  protected readonly faStar = faStar;
  protected readonly faLocation = faMapMarkerAlt;
}
