import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
  provideZoneChangeDetection,
} from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import {
  createCustomElement,
  NgElement,
  WithProperties,
} from '@angular/elements';
import { WidgetComponent } from './widget/widget.component';

declare global {
  interface HTMLElementTagNameMap {
    'chat-widget': NgElement & WithProperties<any>;
  }
}

const appConfig: ApplicationConfig = {
  providers: [provideExperimentalZonelessChangeDetection()],
  // providers: [provideZoneChangeDetection({ eventCoalescing: true })],
};

createApplication(appConfig)
  .then((app) => {
    const widgetComponent = createCustomElement(WidgetComponent, {
      injector: app.injector,
    });

    customElements.define('chat-widget', widgetComponent);
  })
  .catch((err) => console.error(err));
