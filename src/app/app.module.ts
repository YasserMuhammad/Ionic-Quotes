import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavoritesPage } from '../pages/favorites/favorites';
import { QuotePage } from '../pages/quote/quote';
import { QuotesPage } from '../pages/quotes/quotes';
import { LibraryPage } from '../pages/library/library';
import { SettingsPage } from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    SettingsPage,
    LibraryPage,
    QuotesPage,
    QuotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    SettingsPage,
    LibraryPage,
    QuotesPage,
    QuotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
