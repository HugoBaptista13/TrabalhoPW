import { Component } from '@angular/core';
import {faMapMarkerAlt, faTicket} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-event2',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './event2.component.html',
  styleUrl: './event2.component.css'
})
export class Event2Component {

    protected readonly faTicket = faTicket;
    protected readonly faLocation = faMapMarkerAlt;
}
