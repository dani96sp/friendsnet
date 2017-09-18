import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MispublicacionesComponent } from './mispublicaciones.component';

describe('MispublicacionesComponent', () => {
  let component: MispublicacionesComponent;
  let fixture: ComponentFixture<MispublicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MispublicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MispublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
