import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Arcane-Project';
  langs: string[] = [];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.addLangs(['en', 'es']);
    this.langs = this.translate.getLangs();
    this.translate.get('HELLO').subscribe((res: string) => {
      console.log(res);
    });
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
