import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsViewPage } from './spells-view-page';

describe('SpellsViewPage', () => {
  let component: SpellsViewPage;
  let fixture: ComponentFixture<SpellsViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpellsViewPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SpellsViewPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
