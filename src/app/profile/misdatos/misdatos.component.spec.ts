import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisdatosComponent } from './misdatos.component';

describe('MisdatosComponent', () => {
  let component: MisdatosComponent;
  let fixture: ComponentFixture<MisdatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisdatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
