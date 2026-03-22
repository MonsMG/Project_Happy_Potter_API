import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesViewPage } from './houses-view-page';

describe('HousesViewPage', () => {
  let component: HousesViewPage;
  let fixture: ComponentFixture<HousesViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousesViewPage],
    }).compileComponents();

    fixture = TestBed.createComponent(HousesViewPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
