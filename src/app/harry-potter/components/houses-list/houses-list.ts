import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-houses-list',
  imports: [],
  templateUrl: './houses-list.html',
  styleUrl: './houses-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HousesList {}
