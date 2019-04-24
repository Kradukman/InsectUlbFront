import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInsectComponent } from './add-insect.component';

describe('AddInsectComponent', () => {
  let component: AddInsectComponent;
  let fixture: ComponentFixture<AddInsectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInsectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInsectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
