import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu12',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu12.component.html',
  styleUrl: './museu12.component.css'
})
export class Museu12Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
