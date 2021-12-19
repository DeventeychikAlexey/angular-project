import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionSectionCardFormComponent } from './collection-section-card-form.component';

describe('CollectionCardFormSectionComponent', () => {
  let component: CollectionSectionCardFormComponent;
  let fixture: ComponentFixture<CollectionSectionCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectionSectionCardFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionSectionCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
