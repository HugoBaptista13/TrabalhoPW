import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu20',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu20.component.html',
  styleUrl: './museu20.component.css'
})
export class Museu20Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
