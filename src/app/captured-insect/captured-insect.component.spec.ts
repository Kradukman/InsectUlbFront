import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturedInsectComponent } from './captured-insect.component';

describe('CapturedInsectComponent', () => {
  let component: CapturedInsectComponent;
  let fixture: ComponentFixture<CapturedInsectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturedInsectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturedInsectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
