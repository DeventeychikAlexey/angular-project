import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSectionCardFormEditComponent } from './item-section-card-form-edit.component';

describe('ItemSectionCardFormEditComponent', () => {
  let component: ItemSectionCardFormEditComponent;
  let fixture: ComponentFixture<ItemSectionCardFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSectionCardFormEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSectionCardFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
