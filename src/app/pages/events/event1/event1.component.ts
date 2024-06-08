import { Component } from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faMapMarkerAlt, faCalendarAlt, faTicket} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-event1',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './event1.component.html',
  styleUrl: './event1.component.css'
})
export class Event1Component {
  faLocation = faMapMarkerAlt;
  faCalendar = faCalendarAlt;
  faTicket = faTicket;
}
