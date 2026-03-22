import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-character-view-page',
  imports: [],
  templateUrl: './character-view-page.html',
  styleUrl: './character-view-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterViewPage {}
