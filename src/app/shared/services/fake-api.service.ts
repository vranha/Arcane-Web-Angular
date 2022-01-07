import { CharacterInterface } from 'src/app/shared/models/characater';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FakeApiService {
  baseUrl: string = 'http://localhost:3000/';
  characterUrl: string = this.baseUrl + 'characters';

  characterList: CharacterInterface[] = [];

  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get(this.characterUrl);
  }

  addCharacter(person: CharacterInterface) {
    const body = JSON.stringify(person);
    console.log(body);
    return this.http.post(this.characterUrl, person);
  }
}
