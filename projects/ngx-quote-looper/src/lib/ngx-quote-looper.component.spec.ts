import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxQuoteLooperComponent } from './ngx-quote-looper.component';

describe('NgxQuoteLooperComponent', () => {
  let component: NgxQuoteLooperComponent;
  let fixture: ComponentFixture<NgxQuoteLooperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxQuoteLooperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxQuoteLooperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
