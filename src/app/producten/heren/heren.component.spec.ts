import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerenComponent } from './heren.component';

describe('HerenComponent', () => {
  let component: HerenComponent;
  let fixture: ComponentFixture<HerenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
