import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MishistorietasComponent } from './mishistorietas.component';

describe('MishistorietasComponent', () => {
  let component: MishistorietasComponent;
  let fixture: ComponentFixture<MishistorietasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MishistorietasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MishistorietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
