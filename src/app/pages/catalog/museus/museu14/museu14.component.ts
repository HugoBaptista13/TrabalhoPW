import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu14',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu14.component.html',
  styleUrl: './museu14.component.css'
})
export class Museu14Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
