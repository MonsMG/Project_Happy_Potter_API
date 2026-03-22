import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-characters-list-page',
  imports: [],
  templateUrl: './characters-list-page.html',
  styleUrl: './characters-list-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersListPage {}
