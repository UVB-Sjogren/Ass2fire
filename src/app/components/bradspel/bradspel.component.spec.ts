import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BradspelComponent } from './bradspel.component';

describe('BradspelComponent', () => {
  let component: BradspelComponent;
  let fixture: ComponentFixture<BradspelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BradspelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BradspelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
