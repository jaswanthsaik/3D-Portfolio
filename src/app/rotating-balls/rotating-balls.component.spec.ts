import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingBallsComponent } from './rotating-balls.component';

describe('RotatingBallsComponent', () => {
  let component: RotatingBallsComponent;
  let fixture: ComponentFixture<RotatingBallsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotatingBallsComponent]
    });
    fixture = TestBed.createComponent(RotatingBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
