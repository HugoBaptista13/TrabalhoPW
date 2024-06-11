import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu29',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu29.component.html',
  styleUrl: './museu29.component.css'
})
export class Museu29Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
