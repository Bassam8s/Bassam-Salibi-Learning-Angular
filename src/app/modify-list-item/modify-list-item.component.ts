import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Player} from "../Shared/Models/Player";
import {ActivatedRoute, Router} from "@angular/router";
import {PlayerService} from "../Service/player.service";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {

  playerForm: FormGroup ;
  player: Player | undefined;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private playerServices: PlayerService,
    private router: Router
  ) {
    this.playerForm = this.fb.group({
      id: ['', Validators.required], //ID is required
      firstName: ['', Validators.required],//First name is required
      lastName: ['', Validators.required],
      jerseyNumber: [''],
      isTeamLeader: [false]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.playerServices.getPlayerById(+id).subscribe(player => {
        if (player) {
          this.player = player;
          this.playerForm.patchValue(player);
        }
      });
    }
  }
  onSubmit(): void {
    const player: Player = this.playerForm.value;

    if (player.id) {
      this.playerServices.updatePlayer(player);
    } else {
      // For adding a new Player, generate a new ID
      const newId = this.playerServices.generateNewId(); // This method will create a new ID
      player.id = newId;
      this.playerServices.addPlayer(player);
    }
    this.router.navigate(['/players']);
  }

}

