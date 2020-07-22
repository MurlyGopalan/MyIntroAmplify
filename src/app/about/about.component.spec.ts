import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouotComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AbouotComponent;
  let fixture: ComponentFixture<AbouotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbouotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
