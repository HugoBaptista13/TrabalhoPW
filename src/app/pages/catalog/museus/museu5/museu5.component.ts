import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu5',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu5.component.html',
  styleUrl: './museu5.component.css'
})
export class Museu5Component {

  protected readonly faStar = faStar;
  protected readonly faLocation = faMapMarkerAlt;
}
