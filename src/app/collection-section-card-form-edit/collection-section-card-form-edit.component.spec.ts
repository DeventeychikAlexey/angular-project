import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionSectionCardFormEditComponent } from './collection-section-card-form-edit.component';

describe('CollectionSectionCardFormEditComponent', () => {
  let component: CollectionSectionCardFormEditComponent;
  let fixture: ComponentFixture<CollectionSectionCardFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionSectionCardFormEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionSectionCardFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
