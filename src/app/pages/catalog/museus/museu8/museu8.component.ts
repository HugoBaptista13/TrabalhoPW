import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu8',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu8.component.html',
  styleUrl: './museu8.component.css'
})
export class Museu8Component {

  protected readonly faStar = faStar;
  protected readonly faLocation = faMapMarkerAlt;
}
