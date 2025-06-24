import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutsec } from './aboutsec';

describe('Aboutsec', () => {
  let component: Aboutsec;
  let fixture: ComponentFixture<Aboutsec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutsec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutsec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
