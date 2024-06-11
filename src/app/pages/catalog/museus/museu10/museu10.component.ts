import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu10',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu10.component.html',
  styleUrl: './museu10.component.css'
})
export class Museu10Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
