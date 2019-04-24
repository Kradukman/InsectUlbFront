import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsectListComponent } from './insect-list.component';

describe('InsectListComponent', () => {
  let component: InsectListComponent;
  let fixture: ComponentFixture<InsectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
