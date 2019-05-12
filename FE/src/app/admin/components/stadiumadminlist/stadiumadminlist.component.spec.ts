import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumadminlistComponent } from './stadiumadminlist.component';

describe('StadiumadminlistComponent', () => {
  let component: StadiumadminlistComponent;
  let fixture: ComponentFixture<StadiumadminlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumadminlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumadminlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
