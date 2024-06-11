import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu15',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu15.component.html',
  styleUrl: './museu15.component.css'
})
export class Museu15Component {

    protected readonly faStar = faStar;
  protected readonly faLocation = faMapMarkerAlt;
}
