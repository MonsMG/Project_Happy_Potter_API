import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../types/api';

@Component({
  selector: 'app-character-view',
  imports: [],
  templateUrl: './character-view.html',
  styleUrl: './character-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterView {
  // 🎯 รับข้อมูลตัวละครแค่ "1 ตัว" (ไม่ใช่ Array แล้วนะครับ)
  readonly character = input.required<Character>();
}
