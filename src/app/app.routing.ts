import { AppComponent } from './app.component';
import { CharacterNewComponent } from './character-new/character-new.component';
import { Game1Component } from './game-1/game-1.component';
import { Game2Component } from './game-2/game-2.component';
import { Game3Component } from './game-3/game-3.component';
import { Game4Component } from './game-4/game-4.component';
import { Game5Component } from './game-5/game-5.component';
import { Game6Component } from './game-6/game-6.component';
import { Game7Component } from './game-7/game-7.component';
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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
