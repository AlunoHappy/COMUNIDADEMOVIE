import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ComponentsModule } from '../components/components.module';
import { MovieProvider } from '../providers/movie/movie';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { CommentsPage } from '../pages/comments/comments';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CommentsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    ,ComponentsModule
    , HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
