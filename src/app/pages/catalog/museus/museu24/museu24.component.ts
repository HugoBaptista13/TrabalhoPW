import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu24',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu24.component.html',
  styleUrl: './museu24.component.css'
})
export class Museu24Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
