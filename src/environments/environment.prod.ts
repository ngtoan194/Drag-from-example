import { KeycloakConfig } from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
  url: 'http://keycloak-egp-test.apps.egp.local/auth',
  realm: 'egp',
  clientId: 'user'
};

export const environment = {
  production: true,
  webcomponent: {
    egpLuncherUrl: 'http://kongproxy-egp-test.apps.egp.local/static/main.js'
  },
  keycloakConfig
};
