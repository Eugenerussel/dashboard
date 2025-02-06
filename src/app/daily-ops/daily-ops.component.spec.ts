import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyOpsComponent } from './daily-ops.component';

describe('DailyOpsComponent', () => {
  let component: DailyOpsComponent;
  let fixture: ComponentFixture<DailyOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyOpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
