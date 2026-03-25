import { Component, resource, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterList } from '../../components/character-list/character-list';
import { fetchAllCharacters } from '../../helpers/resources';

@Component({
  selector: 'app-characters-list-page',
  standalone: true,
  imports: [CharacterList, FormsModule], // 🎯 อย่าลืม import Component เข้ามาใช้
  templateUrl: './characters-list-page.html',
  styleUrl: './characters-list-page.scss',
})
export class CharactersListPage {
  searchQuery = signal<string>('');
  currentPage = signal(1); // หน้าปัจจุบัน
  readonly pageSize = 20; // จำนวน item ต่อหน้า

  // 🎯 ดึงข้อมูล API ด้วย resource() แบบล้ำๆ ตามที่เรียนในสัปดาห์ 11-12
  charactersData = resource({
    loader: async () => await fetchAllCharacters(),
  });

  // กรองข้อมูลตามคำค้นหา
  filteredCharacters = computed(() => {
    const chars = this.charactersData.value() ?? [];
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return chars;
    return chars.filter(c => c.name.toLowerCase().includes(query));
  });

  // คำนวณจำนวนหน้าทั้งหมด
  totalPages = computed(() => Math.ceil(this.filteredCharacters().length / this.pageSize));

  // หั่นข้อมูลตาม page ปัจจุบัน
  paginatedCharacters = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredCharacters().slice(start, start + this.pageSize);
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
