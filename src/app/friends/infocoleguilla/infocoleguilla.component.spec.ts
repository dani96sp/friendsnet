import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocoleguillaComponent } from './infocoleguilla.component';

describe('InfocoleguillaComponent', () => {
  let component: InfocoleguillaComponent;
  let fixture: ComponentFixture<InfocoleguillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfocoleguillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocoleguillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
