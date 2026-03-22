import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsListPage } from './spells-list-page';

describe('SpellsListPage', () => {
  let component: SpellsListPage;
  let fixture: ComponentFixture<SpellsListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpellsListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SpellsListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
