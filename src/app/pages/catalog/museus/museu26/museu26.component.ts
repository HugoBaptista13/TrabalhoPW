import { Component } from '@angular/core';
import {faMapMarkerAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-museu26',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './museu26.component.html',
  styleUrl: './museu26.component.css'
})
export class Museu26Component {

    protected readonly faStar = faStar;
    protected readonly faLocation = faMapMarkerAlt;
}
