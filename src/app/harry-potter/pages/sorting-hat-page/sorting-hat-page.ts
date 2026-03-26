import { Component, computed, resource, linkedSignal, signal } from '@angular/core';
// 🎯 Import ฟีเจอร์ Form อนาคตจาก Angular
import { FormField, form, submit } from '@angular/forms/signals';
import { HousesView } from '../../components/houses-view/houses-view';
import { fetchCharactersByHouse } from '../../helpers/resources';

@Component({
  selector: 'app-sorting-hat-page',
  standalone: true,
  // 🎯 อย่าลืม import FormField เข้ามาใช้ใน HTML
  imports: [HousesView, FormField],
  templateUrl: './sorting-hat-page.html',
  styleUrl: './sorting-hat-page.scss',
})
export class SortingHatPage {
  // Signal สำหรับเก็บผลลัพธ์ว่าได้บ้านอะไร
  protected readonly sortedHouse = signal<string>('');

  // 🎯 1. สร้าง Form ด้วย Signal Forms API
  protected readonly sortingForm = form(
    linkedSignal(() => ({
      userName: '',
      trait: '',
      animal: '',
    })),
  );

  // 🎯 2. Computed เช็คความถูกต้อง (อ่านค่าจาก form().value() ได้เลย)
  protected readonly isFormValid = computed(() => {
    const val = this.sortingForm().value();
    return val.userName.trim() !== '' && val.trait !== '' && val.animal !== '';
  });

  // 🎯 3. ดึงข้อมูลเพื่อนร่วมบ้าน (ใช้ Resource API ตามเดิม)
  protected readonly houseMembersData = resource({
    params: () => this.sortedHouse(),
    loader: async ({ params }) => {
      if (!params) return [];
      return await fetchCharactersByHouse(params.toLowerCase());
    },
  });

  // 🎯 4. ฟังก์ชัน Submit โดยใช้ submit() จาก @angular/forms/signals
  protected sortHouse(): void {
    if (!this.isFormValid()) return;

    submit(this.sortingForm, async (formState) => {
      // ดึงค่าออกมาจาก formState
      const houses = formState().value();

      if (houses.trait === 'brave' || houses.animal === 'lion') {
        this.sortedHouse.set('Gryffindor');
      } else if (houses.trait === 'smart' || houses.animal === 'eagle') {
        this.sortedHouse.set('Ravenclaw');
      } else if (houses.trait === 'loyal' || houses.animal === 'badger') {
        this.sortedHouse.set('Hufflepuff');
      } else {
        this.sortedHouse.set('Slytherin');
      }
    });
  }

  // 🎯 5. ฟังก์ชัน Reset (เข้าถึง .value.set() ทีละฟิลด์ตามโครงสร้างใหม่)
  protected resetForm(): void {
    this.sortingForm.userName().value.set('');
    this.sortingForm.trait().value.set('');
    this.sortingForm.animal().value.set('');
    this.sortedHouse.set('');
  }
}
