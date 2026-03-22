import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-character-view',
  imports: [],
  templateUrl: './character-view.html',
  styleUrl: './character-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterView {}
