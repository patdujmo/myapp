import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopNavComponent } from './desktop-nav.component';

describe('DesktopNavComponent', () => {
  let component: DesktopNavComponent;
  let fixture: ComponentFixture<DesktopNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DesktopNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
