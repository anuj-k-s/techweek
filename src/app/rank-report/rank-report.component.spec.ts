import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankReportComponent } from './rank-report.component';

describe('RankReportComponent', () => {
  let component: RankReportComponent;
  let fixture: ComponentFixture<RankReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
