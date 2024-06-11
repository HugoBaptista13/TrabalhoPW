import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu18',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu18.component.html',
  styleUrl: './museu18.component.css'
})
export class Museu18Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
