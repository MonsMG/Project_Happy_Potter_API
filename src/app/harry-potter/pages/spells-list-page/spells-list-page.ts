import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-spells-list-page',
  imports: [],
  templateUrl: './spells-list-page.html',
  styleUrl: './spells-list-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellsListPage {}
