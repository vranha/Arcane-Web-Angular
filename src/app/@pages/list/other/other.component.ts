import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { OtherApiService } from 'src/app/shared/services/other-api.service';
import { OtherInterface } from 'src/app/shared/models/other-character';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
})
export class OtherComponent implements OnInit, OnDestroy {
  currentPage: number;

  otherList: OtherInterface[];

  imageList: string[] = list;

  p: number = 1;

  private getOtherSubscription: Subscription;

  constructor(private otherApiService: OtherApiService) {}

  ngOnInit(): void {
    this.getOtherSubscription = this.otherApiService
      .getOtherCharacters()
      .subscribe((response: any) => {
        const images = this.imageList;
        response.map((character: any) => {
          for (let i = 0; i < images.length; i++) {
            const image = images[i];
            if (image.includes(character.name)) {
              character.image = image;
              return character;
            } else if (!image.includes(character.name)) {
              character.image =
                'https://static.thenounproject.com/png/2247019-200.png';
            }
          }
        });
        this.otherList = response;
        console.log(this.otherList);
      });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    window.scrollTo(0, 0);
  }

  ngOnDestroy(): void {
    this.getOtherSubscription.unsubscribe();
  }
}

const list: string[] = [
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Thresh.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Aatrox.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Tryndamere.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Gragas.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Cassiopeia.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Poppy.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Ryze.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Sion.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Annie.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Karma.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Nautilus.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Lux.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Ahri.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Olaf.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Viktor.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Anivia.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Garen.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Singed.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Lissandra.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Maokai.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Morgana.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Evelynn.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Fizz.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Zed.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Heimerdinger.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Rumble.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Mordekaiser.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Sona.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Katarina.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/KogMaw.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Ashe.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Lulu.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Karthus.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Alistar.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Darius.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Vayne.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Varus.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Udyr.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Jayce.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Leona.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Syndra.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Pantheon.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Khazix.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Riven.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Corki.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Azir.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Caitlyn.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Nidalee.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Galio.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Kennen.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Veigar.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Bard.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Gnar.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Graves.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Malzahar.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Vi.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Kayle.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Irelia.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/LeeSin.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Elise.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Volibear.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Nunu.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/TwistedFate.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Jax.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Shyvana.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Kalista.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/DrMundo.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Brand.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Diana.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Sejuani.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Vladimir.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Zac.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/RekSai.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Quinn.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Akali.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Tristana.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Hecarim.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Sivir.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Lucian.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Rengar.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Warwick.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Skarner.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Malphite.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Yasuo.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Xerath.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Teemo.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Nasus.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Renekton.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Draven.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Shaco.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Swain.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Ziggs.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Janna.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Talon.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Orianna.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/FiddleSticks.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Fiora.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Chogath.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Rammus.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Leblanc.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Zilean.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Soraka.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Nocturne.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Jinx.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Yorick.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Urgot.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/MissFortune.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/MonkeyKing.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Blitzcrank.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Shen.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Braum.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/XinZhao.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Twitch.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/MasterYi.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Taric.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Amumu.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Gangplank.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Trundle.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Kassadin.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Velkoz.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Zyra.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Nami.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/JarvanIV.png',
  'http://ddragon.leagueoflegends.com/cdn/5.9.1/img/champion/Ezreal.png',
];
