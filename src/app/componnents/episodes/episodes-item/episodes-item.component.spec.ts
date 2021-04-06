import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesItemComponent } from './episodes-item.component';

describe('EpisodesItemComponent', () => {
  let component: EpisodesItemComponent;
  let fixture: ComponentFixture<EpisodesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
