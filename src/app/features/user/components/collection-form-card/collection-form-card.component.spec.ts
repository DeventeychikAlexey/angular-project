import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionFormCardComponent } from './collection-form-card.component';

describe('CollectionFormCardComponent', () => {
  let component: CollectionFormCardComponent;
  let fixture: ComponentFixture<CollectionFormCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionFormCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
