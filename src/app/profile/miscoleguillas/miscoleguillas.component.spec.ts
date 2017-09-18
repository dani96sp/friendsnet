import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscoleguillasComponent } from './miscoleguillas.component';

describe('MiscoleguillasComponent', () => {
  let component: MiscoleguillasComponent;
  let fixture: ComponentFixture<MiscoleguillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscoleguillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscoleguillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
