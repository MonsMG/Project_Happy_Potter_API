import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-houses-list-page',
  imports: [],
  templateUrl: './houses-list-page.html',
  styleUrl: './houses-list-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HousesListPage {}
