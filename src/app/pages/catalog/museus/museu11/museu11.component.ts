import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu11',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu11.component.html',
  styleUrl: './museu11.component.css'
})
export class Museu11Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
