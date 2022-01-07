import { Component, OnInit } from '@angular/core';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { faSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-explain',
  templateUrl: './explain.component.html',
  styleUrls: ['./explain.component.scss'],
})
export class ExplainComponent implements OnInit {
  faArrows = faAngleDoubleDown;
  faSlash = faSlash;

  quote: string = 'two sides of the same coin';
  constructor() {}

  ngOnInit(): void {}
}
