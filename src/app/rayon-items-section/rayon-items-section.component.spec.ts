import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RayonItemsSectionComponent } from './rayon-items-section.component';

describe('RayonItemsSectionComponent', () => {
  let component: RayonItemsSectionComponent;
  let fixture: ComponentFixture<RayonItemsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RayonItemsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RayonItemsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
