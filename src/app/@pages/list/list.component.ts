import { CharacterInterface } from './../../shared/models/characater';
import { FakeApiService } from 'src/app/shared/services/fake-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{



  constructor() { }

  ngOnInit(): void {


  }
}
