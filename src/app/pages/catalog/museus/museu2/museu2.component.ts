import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu2',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu2.component.html',
  styleUrl: './museu2.component.css'
})
export class Museu2Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
