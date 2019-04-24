import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacetypeListComponent } from './placetype-list.component';

describe('PlacetypeListComponent', () => {
  let component: PlacetypeListComponent;
  let fixture: ComponentFixture<PlacetypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacetypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacetypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
