import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionEditingPageComponent } from './collection-editing-page.component';

describe('CollectionEditingPageComponent', () => {
  let component: CollectionEditingPageComponent;
  let fixture: ComponentFixture<CollectionEditingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionEditingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionEditingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
