import { Component, inject, resource, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { fetchCharactersByHouse } from '../../helpers/resources';
import { HousesView } from '../../components/houses-view/houses-view'; // นำเข้า Component ลูก
import { Character } from '../../types/api';

@Component({
  selector: 'app-houses-view-page',
  standalone: true,
  imports: [HousesView], // ยัด HousesView ใส่ imports เพื่อให้ใช้งาน <app-houses-view> ใน HTML ได้
  templateUrl: './houses-view-page.html',
  styleUrl: './houses-view-page.scss',
})
export class HousesViewPage {
  // ดึงเครื่องมืออ่านค่าพารามิเตอร์จาก URL
  private route = inject(ActivatedRoute);
  private location = inject(Location);

  // สกัดชื่อบ้านออกจาก URL (เช่น /houses/gryffindor)
  houseName = this.route.snapshot.paramMap.get('house') ?? 'gryffindor';

  // 🎯 Pagination Signals
  currentPage = signal(1);
  readonly pageSize = 20;

  goBack() {
    this.location.back();
  }

  // 🎯 ใช้ resource() กับ async/await จัดการ API ดึงข้อมูลตามชื่อบ้านได้ถูกต้องและสมบูรณ์
  charactersData = resource<Character[], string>({
    params: () => this.houseName,
    loader: async ({ params }) => await fetchCharactersByHouse(params),
  });

  // คำนวณจำนวนหน้าทั้งหมด
  totalPages = computed(() => {
    const total = this.charactersData.value()?.length ?? 0;
    return Math.ceil(total / this.pageSize);
  });

  // หั่นข้อมูลตาม page ปัจจุบัน
  paginatedCharacters = computed(() => {
    const chars = this.charactersData.value() ?? [];
    const start = (this.currentPage() - 1) * this.pageSize;
    return chars.slice(start, start + this.pageSize);
  });

  // เปลี่ยนหน้า
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
}

