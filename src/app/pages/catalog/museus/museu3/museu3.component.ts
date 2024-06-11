import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu3',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu3.component.html',
  styleUrl: './museu3.component.css'
})
export class Museu3Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
