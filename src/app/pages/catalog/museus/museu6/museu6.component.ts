import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu6',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu6.component.html',
  styleUrl: './museu6.component.css'
})
export class Museu6Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
