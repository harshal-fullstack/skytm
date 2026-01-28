import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transacation } from './transacation';

describe('Transacation', () => {
  let component: Transacation;
  let fixture: ComponentFixture<Transacation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transacation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Transacation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
