import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobanteListComponent } from './comprobante-list.component';

describe('ComprobanteListComponent', () => {
  let component: ComprobanteListComponent;
  let fixture: ComponentFixture<ComprobanteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobanteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobanteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
