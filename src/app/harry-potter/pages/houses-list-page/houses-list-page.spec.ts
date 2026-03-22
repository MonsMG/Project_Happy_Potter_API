import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesListPage } from './houses-list-page';

describe('HousesListPage', () => {
  let component: HousesListPage;
  let fixture: ComponentFixture<HousesListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousesListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(HousesListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
