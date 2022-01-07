import { Component, OnInit } from '@angular/core';
import { faLevelDownAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  faArrow = faLevelDownAlt;

  charactersType: string[] = [
    'Jinx',
    'Viktor',
    'Jayce',
    'Caitlyn',
    'Singed',
    'Vi',
    'Ekko',
    'Heimer',
  ];

  constructor() {}

  ngOnInit(): void {}
}
