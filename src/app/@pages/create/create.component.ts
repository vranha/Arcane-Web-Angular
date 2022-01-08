import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CharacterInterface } from 'src/app/shared/models/characater';
import { FakeApiService } from 'src/app/shared/services/fake-api.service';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  faCheck = faCheck;
  faTimes = faTimes;

  createForm: FormGroup;

  submitted: boolean = false;

  constructor(private fakeApiService: FakeApiService) {}

  ngOnInit(): void {
    this.createForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_.]{1,15}$'),
      ]),
      alias: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]{1,20}$'),
      ]),
      race: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_.]{1,10}$'),
      ]),
      origin: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_.]{1,10}$'),
      ]),
      image: new FormControl('', [Validators.required]),
      strength: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9][0-9]?$|^100$'),
      ]),
      intelligence: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9][0-9]?$|^100$'),
      ]),
      agility: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9][0-9]?$|^100$'),
      ]),
      gadgets: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9][0-9]?$|^100$'),
      ]),
    });
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.createForm.value.image);

    if (this.createForm.value.image === 'Superhero') {
      if (this.createForm.valid) {
        const character: CharacterInterface = {
          id: Math.random() * 1000000000000000000,
          name: this.createForm.value.name,
          alias: this.createForm.value.alias,
          race: this.createForm.value.race,
          origin: this.createForm.value.origin,
          image:
            'https://i.graphicmama.com/uploads/2019/4/5cbd630146fb7-generic-superhero-cartoon-vector-character-aka-mister-magnetic.png',
          stats: {
            strength: this.createForm.value.strength,
            intelligence: this.createForm.value.intelligence,
            agility: this.createForm.value.agility,
            gadgets: this.createForm.value.gadgets,
          },
        };
        this.fakeApiService.addCharacter(character).subscribe();
        window.alert("Go to list");
      }
    } else if (this.createForm.value.image === 'Alien') {
      if (this.createForm.valid) {
        const character: CharacterInterface = {
          id: Math.random() * 1000000000000000000,
          name: this.createForm.value.name,
          alias: this.createForm.value.alias,
          race: this.createForm.value.race,
          origin: this.createForm.value.origin,
          image:
            'https://www.pngkey.com/png/full/201-2014826_stitches-cliparts-lilo-and-stitch.png',
          stats: {
            strength: this.createForm.value.strength,
            intelligence: this.createForm.value.intelligence,
            agility: this.createForm.value.agility,
            gadgets: this.createForm.value.gadgets,
          },
        };
        this.fakeApiService.addCharacter(character).subscribe();
        window.alert("Go to list");
      }
    } else if (this.createForm.value.image === 'Valkyrie') {
      if (this.createForm.valid) {
        const character: CharacterInterface = {
          id: Math.random() * 1000000000000000000,
          name: this.createForm.value.name,
          alias: this.createForm.value.alias,
          race: this.createForm.value.race,
          origin: this.createForm.value.origin,
          image:
            'http://assets.stickpng.com/images/58eeb16dee9418469d17edf5.png',
          stats: {
            strength: this.createForm.value.strength,
            intelligence: this.createForm.value.intelligence,
            agility: this.createForm.value.agility,
            gadgets: this.createForm.value.gadgets,
          },
        };
        this.fakeApiService.addCharacter(character).subscribe();
        window.alert("Go to list");
      }
    }

    this.createForm.reset();
    this.submitted = false;
  }


}
