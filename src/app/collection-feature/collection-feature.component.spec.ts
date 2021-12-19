import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionFeatureComponent } from './collection-feature.component';

describe('CollectionPageComponent', () => {
  let component: CollectionFeatureComponent;
  let fixture: ComponentFixture<CollectionFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectionFeatureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
