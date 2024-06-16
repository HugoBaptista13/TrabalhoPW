import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {NavigationEnd, Router} from '@angular/router';

bootstrapApplication(AppComponent, appConfig)
  .then(platformRef => {
    const router = platformRef.injector.get(Router);
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({top: 0, behavior: 'instant', left: 0} );
      }
    });
  })
  .catch((err) => console.error(err));
