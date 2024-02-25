import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SimplexmodelComponent } from './simplexmodel.component';

describe('SimplexmodelComponent', () => {
  let component: SimplexmodelComponent;
  let fixture: ComponentFixture<SimplexmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplexmodelComponent, HttpClientTestingModule]
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
