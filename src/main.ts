import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const script = document.createElement('script');
script.src = environment.webcomponent.egpLuncherUrl;
document.head.appendChild(script);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
