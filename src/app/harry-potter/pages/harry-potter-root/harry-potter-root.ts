import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-harry-potter-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './harry-potter-root.html',
  styleUrl: './harry-potter-root.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HarryPotterRoot {}
