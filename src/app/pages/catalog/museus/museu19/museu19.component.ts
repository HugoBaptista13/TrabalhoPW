import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu19',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu19.component.html',
  styleUrl: './museu19.component.css'
})
export class Museu19Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
