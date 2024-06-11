import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu17',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu17.component.html',
  styleUrl: './museu17.component.css'
})
export class Museu17Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
