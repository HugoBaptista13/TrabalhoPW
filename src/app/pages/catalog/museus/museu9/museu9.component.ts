import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu9',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu9.component.html',
  styleUrl: './museu9.component.css'
})
export class Museu9Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
