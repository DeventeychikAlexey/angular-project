import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormButtonComponent } from './form-button.component';

describe('ButtonComponent', () => {
  let component: FormButtonComponent;
  let fixture: ComponentFixture<FormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});