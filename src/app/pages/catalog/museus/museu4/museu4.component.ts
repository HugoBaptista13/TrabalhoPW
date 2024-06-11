import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu4',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu4.component.html',
  styleUrl: './museu4.component.css'
})
export class Museu4Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
