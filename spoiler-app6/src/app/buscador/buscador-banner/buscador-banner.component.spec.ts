import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorBannerComponent } from './buscador-banner.component';

describe('BuscadorBannerComponent', () => {
  let component: BuscadorBannerComponent;
  let fixture: ComponentFixture<BuscadorBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
