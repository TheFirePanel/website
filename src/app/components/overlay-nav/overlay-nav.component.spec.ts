import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayNavComponent } from './overlay-nav.component';

describe('OverlayNavComponent', () => {
  let component: OverlayNavComponent;
  let fixture: ComponentFixture<OverlayNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverlayNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
