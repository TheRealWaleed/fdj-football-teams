import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRoleCardComponent } from './player-role-card.component';

describe('PlayerRoleCardComponent', () => {
  let component: PlayerRoleCardComponent;
  let fixture: ComponentFixture<PlayerRoleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerRoleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRoleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
