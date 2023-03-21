import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmComponent } from './verify-em.component';

describe('VerifyEmComponent', () => {
  let component: VerifyEmComponent;
  let fixture: ComponentFixture<VerifyEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyEmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
