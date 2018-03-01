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
    Game7Component
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
