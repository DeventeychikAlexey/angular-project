import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSectionCardFormComponent } from './item-section-card-form.component';

describe('ItemSectionCardFormComponent', () => {
  let component: ItemSectionCardFormComponent;
  let fixture: ComponentFixture<ItemSectionCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSectionCardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSectionCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
