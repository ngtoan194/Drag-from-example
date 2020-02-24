
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../environments/environment';
import { AppRouterStateSerializer } from './app-router-state-serializer';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
import { TokenInterceptor } from './shared/interceptors/token-interceptor';
import { AppRoutingModule } from './app-routing.module';

import { appEffects } from './app/store/app.effect';
import { appReducers } from './app/store/app.reducer';
import { AppComponent } from './app.component';
import { HttpErrorInterceptor } from './shared/interceptors/http-error.interceptor';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    TranslateModule,
    StoreModule.forRoot(appReducers, { metaReducers }),
    EffectsModule.forRoot(appEffects),
    StoreRouterConnectingModule.forRoot(),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    LanguageTranslationModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: AppRouterStateSerializer },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
