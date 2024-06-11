import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu22',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu22.component.html',
  styleUrl: './museu22.component.css'
})
export class Museu22Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
