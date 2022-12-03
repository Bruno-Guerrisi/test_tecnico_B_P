import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalyzerComponent } from './data-analyzer.component';

describe('DataAnalyzerComponent', () => {
  let component: DataAnalyzerComponent;
  let fixture: ComponentFixture<DataAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAnalyzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
