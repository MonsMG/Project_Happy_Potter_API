import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HarryPotterService, Character } from '../../services/harry-potter.service';

@Component({
  selector: 'app-character-view-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-view-page.html',
  styleUrls: ['./character-view-page.scss']
})
export class CharacterViewPage implements OnInit {
  private route = inject(ActivatedRoute);
  private hpService = inject(HarryPotterService);

  character: Character | null = null;
  isLoading = true;

  ngOnInit(): void {
    // อ่านค่า id จาก URL (เช่น /characters/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8)
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.hpService.getCharacterById(id).subscribe({
        next: (data) => {
          // API ส่งกลับมาเป็น Array เสมอ ให้เอา index ที่ 0
          if (data && data.length > 0) {
            this.character = data[0];
          }
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching character details', err);
          this.isLoading = false;
        }
      });
    }
  }
}
