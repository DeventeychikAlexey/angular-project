import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionSectionCardFormCreateComponent } from './collection-section-card-form-create.component';

describe('CollectionSectionCardFormCreateComponent', () => {
  let component: CollectionSectionCardFormCreateComponent;
  let fixture: ComponentFixture<CollectionSectionCardFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionSectionCardFormCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionSectionCardFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
