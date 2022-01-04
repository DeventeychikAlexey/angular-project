import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSectionCardFormCreateComponent } from './item-section-card-form-create.component';

describe('ItemSectionCardFormCreateComponent', () => {
  let component: ItemSectionCardFormCreateComponent;
  let fixture: ComponentFixture<ItemSectionCardFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSectionCardFormCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSectionCardFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
