import { Component, inject, resource } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { fetchSpellById } from '../../helpers/resources';

@Component({
  selector: 'app-spells-view-page',
  standalone: true,
  imports: [],
  templateUrl: './spells-view-page.html',
  styleUrl: './spells-view-page.scss',
})
export class SpellsViewPage {
  private route = inject(ActivatedRoute);
  private location = inject(Location);

  spellId = this.route.snapshot.paramMap.get('id') ?? ''; // ดึง ID จาก Route 

  goBack() {
    this.location.back();
  }

  spellData = resource({
    params: () => this.spellId,
    loader: async ({ params }) => await fetchSpellById(params),
  });
}