import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu13',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu13.component.html',
  styleUrl: './museu13.component.css'
})
export class Museu13Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
