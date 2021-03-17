import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsPlayersComponent } from './clubs-players.component';

describe('ClubsPlayersComponent', () => {
  let component: ClubsPlayersComponent;
  let fixture: ComponentFixture<ClubsPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubsPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
