import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable()
export class OtherApiService {
  baseUrl: string =
    'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json';

  constructor(private http: HttpClient) {}

  getOtherCharacters(): Observable<any> {
    return this.http.get<any>(this.baseUrl).pipe(
      map((response) => {
        const data = response.data;
        const newArray: any = [];
        for (const item in data) {
          if (Object.prototype.hasOwnProperty.call(data, item)) {
            const element = data[item];
            const info = element.info;
            const properties = Object.values(info);

            const character = {
              name: element.name,
              title: element.title,
              blurb: element.blurb,
              info: {
                attack: properties[0],
                defense: properties[1],
                magic: properties[2],
                difficulty: properties[3],
              },
            };
            newArray.push(character);
          }
        }
        return newArray;
      })
    );
  }
}
