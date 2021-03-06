import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFeatureComponent } from './register-feature.component';

describe('RegisterComponent', () => {
  let component: RegisterFeatureComponent;
  let fixture: ComponentFixture<RegisterFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterFeatureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
