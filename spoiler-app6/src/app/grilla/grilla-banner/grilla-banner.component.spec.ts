import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaBannerComponent } from './grilla-banner.component';

describe('GrillaBannerComponent', () => {
  let component: GrillaBannerComponent;
  let fixture: ComponentFixture<GrillaBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
