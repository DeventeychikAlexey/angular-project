import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFieldsFormComponent } from './item-fields-form.component';

describe('ItemFieldsFormComponent', () => {
  let component: ItemFieldsFormComponent;
  let fixture: ComponentFixture<ItemFieldsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFieldsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFieldsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
