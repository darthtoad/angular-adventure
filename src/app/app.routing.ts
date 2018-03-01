import { AppComponent } from './app.component';
import { CharacterNewComponent } from './character-new/character-new.component';
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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
