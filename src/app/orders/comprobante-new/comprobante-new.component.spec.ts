import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobanteNewComponent } from './comprobante-new.component';

describe('ComprobanteNewComponent', () => {
  let component: ComprobanteNewComponent;
  let fixture: ComponentFixture<ComprobanteNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobanteNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobanteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
