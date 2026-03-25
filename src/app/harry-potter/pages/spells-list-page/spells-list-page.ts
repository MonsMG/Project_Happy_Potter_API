import { ChangeDetectionStrategy, Component, resource, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { fetchAllSpells } from '../../helpers/resources';
import { Spell } from '../../types/api';
import { SpellsViewComponent } from '../../components/spells-view/spells-view';

@Component({
  selector: 'app-spells-list-page',
  standalone: true,
  imports: [FormsModule, SpellsViewComponent],
  templateUrl: './spells-list-page.html',
  styleUrl: './spells-list-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellsListPage {
  searchQuery = signal<string>(''); // Signal สำหรับ Form ค้นหา
  currentPage = signal(1); // หน้าปัจจุบัน
  readonly pageSize = 20; // จำนวน item ต่อหน้า

  spellsData = resource<Spell[], void>({
    loader: async () => await fetchAllSpells(), // เชื่อมต่อ API 
  });

  // กรองตามคำค้นหา
  filteredSpells = computed(() => {
    const spells = this.spellsData.value() ?? [];
    const query = this.searchQuery().toLowerCase().trim();
    return spells.filter(s => s.name.toLowerCase().includes(query));
  });

  // คำนวณจำนวนหน้าทั้งหมด
  totalPages = computed(() => Math.ceil(this.filteredSpells().length / this.pageSize));

  // หั่นข้อมูลตาม page ปัจจุบัน
  paginatedSpells = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredSpells().slice(start, start + this.pageSize);
  });

  // เปลี่ยนหน้า
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  // เมื่อค้นหาใหม่ ให้กลับไปหน้าแรก
  onSearch(query: string) {
    this.searchQuery.set(query);
    this.currentPage.set(1);
  }
}