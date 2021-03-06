import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsComponent } from './cds.component';

describe('CdsComponent', () => {
  let component: CdsComponent;
  let fixture: ComponentFixture<CdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
