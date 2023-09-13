import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDPortfolioComponent } from './three-d-portfolio.component';

describe('ThreeDPortfolioComponent', () => {
  let component: ThreeDPortfolioComponent;
  let fixture: ComponentFixture<ThreeDPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeDPortfolioComponent]
    });
    fixture = TestBed.createComponent(ThreeDPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
