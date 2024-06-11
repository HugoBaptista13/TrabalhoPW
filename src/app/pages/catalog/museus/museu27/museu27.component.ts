import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu27',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu27.component.html',
  styleUrl: './museu27.component.css'
})
export class Museu27Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
