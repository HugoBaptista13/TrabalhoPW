import { Component } from '@angular/core';
import {faMapMarkerAlt, faTicket} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-event3',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './event3.component.html',
  styleUrl: './event3.component.css'
})
export class Event3Component {

  protected readonly faLocation = faMapMarkerAlt;
  protected readonly faTicket = faTicket;
}
