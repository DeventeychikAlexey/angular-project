import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionEditingFeatureComponent } from './collection-editing-feature.component';

describe('CollectionEditingPageComponent', () => {
  let component: CollectionEditingFeatureComponent;
  let fixture: ComponentFixture<CollectionEditingFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectionEditingFeatureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionEditingFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
