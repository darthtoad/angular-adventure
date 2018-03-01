import { AppComponent } from './app.component';
import { CharacterNewComponent } from './character-new/character-new.component';
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
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'character/new',
    component: CharacterNewComponent
  },
  {
    path: 'character/:id/game/1',
    component: Game1Component
  },
  {
    path: 'character/:id/game/2',
    component: Game2Component
  },
  {
    path: 'character/:id/game/3',
    component: Game3Component
  },
  {
    path: 'character/:id/game/4',
    component: Game4Component
  },
  {
    path: 'character/:id/game/5',
    component: Game5Component
  },
  {
    path: 'character/:id/game/6',
    component: Game6Component
  },
  {
    path: 'character/:id/game/7',
    component: Game7Component
  },
  {
    path: 'character/:id/game/8',
    component: Game8Component
  },
  {
    path: 'character/:id/game/9',
    component: Game9Component
  },
  {
    path: 'character/:id/game/10',
    component: Game10Component
  },
  {
    path: 'character/:id/game/11',
    component: Game11Component
  },
  {
    path: 'character/:id/game/12',
    component: Game12Component
  },
  {
    path: 'character/:id/game/13',
    component: Game13Component
  },
  {
    path: 'character/:id/game/14',
    component: Game14Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
