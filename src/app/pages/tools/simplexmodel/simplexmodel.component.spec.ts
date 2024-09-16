import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SimplexmodelComponent } from './simplexmodel.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('SimplexmodelComponent', () => {
  let component: SimplexmodelComponent;
  let fixture: ComponentFixture<SimplexmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SimplexmodelComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
