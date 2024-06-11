import { Component } from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-museu1',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './museu1.component.html',
  styleUrl: './museu1.component.css'
})
export class Museu1Component {
  faStar = faStar;
  faLocation = faMapMarkerAlt;
}
