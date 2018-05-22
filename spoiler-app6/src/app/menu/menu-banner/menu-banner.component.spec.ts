import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBannerComponent } from './menu-banner.component';

describe('MenuBannerComponent', () => {
  let component: MenuBannerComponent;
  let fixture: ComponentFixture<MenuBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
