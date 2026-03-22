import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-spells-view',
  imports: [],
  templateUrl: './spells-view.html',
  styleUrl: './spells-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellsView {}
