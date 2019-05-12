import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumadminaddComponent } from './stadiumadminadd.component';

describe('StadiumadminaddComponent', () => {
  let component: StadiumadminaddComponent;
  let fixture: ComponentFixture<StadiumadminaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumadminaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumadminaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
