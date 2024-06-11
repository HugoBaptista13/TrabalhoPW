import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu28',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu28.component.html',
  styleUrl: './museu28.component.css'
})
export class Museu28Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
