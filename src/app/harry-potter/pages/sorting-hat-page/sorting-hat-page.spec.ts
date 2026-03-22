import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingHatPage } from './sorting-hat-page';

describe('SortingHatPage', () => {
  let component: SortingHatPage;
  let fixture: ComponentFixture<SortingHatPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortingHatPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SortingHatPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
