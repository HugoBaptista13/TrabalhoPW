import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu16',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu16.component.html',
  styleUrl: './museu16.component.css'
})
export class Museu16Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
