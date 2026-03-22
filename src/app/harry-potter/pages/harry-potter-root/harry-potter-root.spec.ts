import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryPotterRoot } from './harry-potter-root';

describe('HarryPotterRoot', () => {
  let component: HarryPotterRoot;
  let fixture: ComponentFixture<HarryPotterRoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarryPotterRoot],
    }).compileComponents();

    fixture = TestBed.createComponent(HarryPotterRoot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
