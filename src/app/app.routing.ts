import { AppComponent } from './app.component';
import { CharacterNewComponent } from './character-new/character-new.component';
import { Game1Component } from './game-1/game-1.component';
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
    path: 'game/1',
    component: Game1Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
