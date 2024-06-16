import { Component } from '@angular/core';
import {faMapMarkerAlt, faTicket} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-event6',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './event6.component.html',
  styleUrl: './event6.component.css'
})
export class Event6Component {

    protected readonly faLocation = faMapMarkerAlt;
    protected readonly faTicket = faTicket;
}
