import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { CharacterNewComponent } from './character-new/character-new.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { Game1Component } from './game-1/game-1.component';
import { Game2Component } from './game-2/game-2.component';
import { Game3Component } from './game-3/game-3.component';
import { Game4Component } from './game-4/game-4.component';
import { Game5Component } from './game-5/game-5.component';
import { Game6Component } from './game-6/game-6.component';
import { Game7Component } from './game-7/game-7.component';
import { Game8Component } from './game-8/game-8.component';
import { Game9Component } from './game-9/game-9.component';
import { Game10Component } from './game-10/game-10.component';
import { Game11Component } from './game-11/game-11.component';
import { Game12Component } from './game-12/game-12.component';
import { Game13Component } from './game-13/game-13.component';
import { Game14Component } from './game-14/game-14.component';
import { Game15Component } from './game-15/game-15.component';
import { Game16Component } from './game-16/game-16.component';
import { Game17Component } from './game-17/game-17.component';
import { Game18Component } from './game-18/game-18.component';
import { Game19Component } from './game-19/game-19.component';
import { Game20Component } from './game-20/game-20.component';
import { Game21Component } from './game-21/game-21.component';
import { Game22Component } from './game-22/game-22.component';
import { Game23Component } from './game-23/game-23.component';
import { Game24Component } from './game-24/game-24.component';
import { Game25Component } from './game-25/game-25.component';
import { Game26Component } from './game-26/game-26.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    CharacterNewComponent,
    Game1Component,
    Game2Component,
    Game3Component,
    Game4Component,
    Game5Component,
    Game6Component,
    Game7Component,
    Game8Component,
    Game9Component,
    Game10Component,
    Game11Component,
    Game12Component,
    Game13Component,
    Game14Component,
    Game15Component,
    Game16Component,
    Game17Component,
    Game18Component,
    Game19Component,
    Game20Component,
    Game21Component,
    Game22Component,
    Game23Component,
    Game24Component,
    Game25Component,
    Game26Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
