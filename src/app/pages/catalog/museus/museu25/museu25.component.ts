import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu25',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu25.component.html',
  styleUrl: './museu25.component.css'
})
export class Museu25Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
