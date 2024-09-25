import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListItemsComponent } from './player-list-items.component';

describe('PlayerListItemsComponent', () => {
  let component: PlayerListItemsComponent;
  let fixture: ComponentFixture<PlayerListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerListItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
