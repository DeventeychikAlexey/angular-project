import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionChangeComponent } from './collection-change.component';

describe('CollectionChangeComponent', () => {
  let component: CollectionChangeComponent;
  let fixture: ComponentFixture<CollectionChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
