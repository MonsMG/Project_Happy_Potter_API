import { Routes } from '@angular/router';

import { HarryPotterRoot } from './pages/harry-potter-root/harry-potter-root';
import { HomePage } from './pages/home-page/home-page';
import { CharactersListPage } from './pages/characters-list-page/characters-list-page';
import { CharacterViewPage } from './pages/character-view-page/character-view-page';
import { HousesListPage } from './pages/houses-list-page/houses-list-page';
import { HousesViewPage } from './pages/houses-view-page/houses-view-page';
import { SpellsListPage } from './pages/spells-list-page/spells-list-page';
import { SpellsViewPage } from './pages/spells-view-page/spells-view-page';
import { SortingHatPage } from './pages/sorting-hat-page/sorting-hat-page';

export const harryPotterRoutes: Routes = [
  {
    path: '',
    component: HarryPotterRoot,
    children: [
      { path: '', component: HomePage },
      { path: 'characters', component: CharactersListPage },
      { path: 'characters/:id', component: CharacterViewPage },
      { path: 'houses', component: HousesListPage },
      { path: 'houses/:house', component: HousesViewPage },
      { path: 'spells', component: SpellsListPage },
      { path: 'spells/:id', component: SpellsViewPage },
      { path: 'sorting-hat', component: SortingHatPage },
    ],
  },
];
