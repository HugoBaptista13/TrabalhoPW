import { Component } from '@angular/core';
import {faMapMarkerAlt, faTicket} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-event5',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './event5.component.html',
  styleUrl: './event5.component.css'
})
export class Event5Component {

    protected readonly faLocation = faMapMarkerAlt;
    protected readonly faTicket = faTicket;
}
