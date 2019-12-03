import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRayonsComponent } from './section-rayons.component';

describe('SectionRayonsComponent', () => {
  let component: SectionRayonsComponent;
  let fixture: ComponentFixture<SectionRayonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionRayonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionRayonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
