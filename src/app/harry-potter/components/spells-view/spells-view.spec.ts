import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsView } from './spells-view';

describe('SpellsView', () => {
  let component: SpellsView;
  let fixture: ComponentFixture<SpellsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpellsView],
    }).compileComponents();

    fixture = TestBed.createComponent(SpellsView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
