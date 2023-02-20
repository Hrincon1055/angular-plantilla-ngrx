import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// NGRX REDUCR
import { appReducers } from './app.reducer';
// ENVIRONMENT
import { environment } from 'src/environments/environment';
// MIS MODULOS
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [AppComponent, Page404Component],
  imports: [
    BrowserModule,
    RouterModule,
    PagesModule,
    AuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
