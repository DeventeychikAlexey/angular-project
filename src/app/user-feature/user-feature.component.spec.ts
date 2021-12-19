import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeatureComponent } from './user-feature.component';

describe('PageComponent', () => {
  let component: UserFeatureComponent;
  let fixture: ComponentFixture<UserFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFeatureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
