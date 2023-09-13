import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthCanvasComponent } from './earth-canvas.component';

describe('EarthCanvasComponent', () => {
  let component: EarthCanvasComponent;
  let fixture: ComponentFixture<EarthCanvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarthCanvasComponent]
    });
    fixture = TestBed.createComponent(EarthCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
