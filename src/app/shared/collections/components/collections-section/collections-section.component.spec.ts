import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsSectionComponent } from './collections-section.component';

describe('CollectionsSectionComponent', () => {
  let component: CollectionsSectionComponent;
  let fixture: ComponentFixture<CollectionsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
