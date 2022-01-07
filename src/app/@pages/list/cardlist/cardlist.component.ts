import { FakeApiService } from './../../../shared/services/fake-api.service';
import { Subscription } from 'rxjs';
import {
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CharacterInterface } from 'src/app/shared/models/characater';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
})
export class CardlistComponent implements OnInit, OnDestroy {
  characterList: CharacterInterface[] = [];

  searchText: string;

  faSearch = faSearch;
  faArrowAltCircleDown = faArrowAltCircleDown;
  faArrowAltCircleUp = faArrowAltCircleUp;

  cargasvg: boolean = true;

  private getCharactersSubscription: Subscription;

  constructor(private fakeApiService: FakeApiService) {}

  ngOnInit(): void {
    this.getCharactersSubscription = this.fakeApiService
      .getCharacters()
      .subscribe((data: any) => {
        this.fakeApiService.characterList = data;
        this.characterList = this.fakeApiService.characterList;
        console.log(data);
        this.cargasvg = false;
      });
  }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  ngOnDestroy(): void {
    this.getCharactersSubscription.unsubscribe();
  }
}
