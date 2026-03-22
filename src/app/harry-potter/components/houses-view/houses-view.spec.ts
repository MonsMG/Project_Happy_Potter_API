import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesView } from './houses-view';

describe('HousesView', () => {
  let component: HousesView;
  let fixture: ComponentFixture<HousesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousesView],
    }).compileComponents();

    fixture = TestBed.createComponent(HousesView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
