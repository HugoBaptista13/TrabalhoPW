import { Routes } from '@angular/router';
import { MainComponent } from './structs/main/main.component';
import { CatalogComponent} from "./pages/catalog/catalog.component";
import { EventsComponent } from "./pages/events/events.component";
import { Event1Component } from "./pages/events/event1/event1.component";

export const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'catalog', component: CatalogComponent},
  { path: 'events', component: EventsComponent},
  { path: 'events/event1', component: Event1Component}
];
