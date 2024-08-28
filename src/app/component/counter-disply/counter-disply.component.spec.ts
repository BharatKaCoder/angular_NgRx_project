import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDisplyComponent } from './counter-disply.component';

describe('CounterDisplyComponent', () => {
  let component: CounterDisplyComponent;
  let fixture: ComponentFixture<CounterDisplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterDisplyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterDisplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
