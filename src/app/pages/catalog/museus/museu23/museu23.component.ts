import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu23',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu23.component.html',
  styleUrl: './museu23.component.css'
})
export class Museu23Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
