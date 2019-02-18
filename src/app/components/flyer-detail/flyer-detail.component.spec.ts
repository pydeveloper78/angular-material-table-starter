import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerDetailComponent } from './flyer-detail.component';

describe('FlyerDetailComponent', () => {
  let component: FlyerDetailComponent;
  let fixture: ComponentFixture<FlyerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
