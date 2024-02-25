import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplexmodelComponent } from './simplexmodel.component';

describe('SimplexmodelComponent', () => {
  let component: SimplexmodelComponent;
  let fixture: ComponentFixture<SimplexmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplexmodelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimplexmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
