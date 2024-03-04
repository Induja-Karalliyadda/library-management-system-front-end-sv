import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBorrowerComponent } from './view-all-borrower.component';

describe('ViewAllBorrowerComponent', () => {
  let component: ViewAllBorrowerComponent;
  let fixture: ComponentFixture<ViewAllBorrowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllBorrowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllBorrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
