import { Component } from '@angular/core';
import {faMapMarkerAlt, faTicket} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-event4',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './event4.component.html',
  styleUrl: './event4.component.css'
})
export class Event4Component {

    protected readonly faLocation = faMapMarkerAlt;
    protected readonly faTicket = faTicket;
}
