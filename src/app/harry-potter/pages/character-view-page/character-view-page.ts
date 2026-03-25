import { Component, inject, resource } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { fetchCharacterById } from '../../helpers';
import { CharacterView } from '../../components/character-view/character-view';

@Component({
  selector: 'app-character-view-page',
  standalone: true,
  imports: [CharacterView],
  templateUrl: './character-view-page.html',
  styleUrls: ['./character-view-page.scss'],
})
export class CharacterViewPage {
  private route = inject(ActivatedRoute);
  private location = inject(Location);

  // 🎯 ดึง ID จาก URL
  readonly characterId = this.route.snapshot.paramMap.get('id') ?? '';

  goBack() {
    this.location.back();
  }

  // 🎯 ใช้ resource() โหลดข้อมูล
  readonly characterData = resource({
    params: () => this.characterId,
    loader: async ({ params }) => {
      const res = await fetchCharacterById(params);
      return res[0]; // 🪄 ดึงเอา Object ตัวละครตัวแรกออกมาจาก Array
    },
  });
}
