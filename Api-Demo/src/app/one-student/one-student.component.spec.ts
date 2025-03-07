import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneStudentComponent } from './one-student.component';

describe('OneStudentComponent', () => {
  let component: OneStudentComponent;
  let fixture: ComponentFixture<OneStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
