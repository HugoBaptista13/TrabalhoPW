import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu21',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu21.component.html',
  styleUrl: './museu21.component.css'
})
export class Museu21Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
