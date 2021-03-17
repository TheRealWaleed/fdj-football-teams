import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueClubsComponent } from './league-clubs.component';

describe('LeagueClubsComponent', () => {
  let component: LeagueClubsComponent;
  let fixture: ComponentFixture<LeagueClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueClubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
