import { Component, OnInit } from '@angular/core';
import { Menuitem } from './models/menuItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public menuItem: Menuitem[] = [
    { label: 'Home', url: '/' },
    { label: 'List', url: '/list' },
    { label: 'Create', url: '/create' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
