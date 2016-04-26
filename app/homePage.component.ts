import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import { List } from 'immutable';

@Component({
  selector: 'my-homePage',
  templateUrl: 'app/homePage.component.html',
  styleUrls: ['app/homePage.component.css']
})
export class HomePageComponent implements OnInit {
  title: string = 'Naprzód S.A.';
  body:  string = 'Informacje o firmie:';
  KRS: string = '0000480105';
  NIP: string = '9452176328';
  REGON: string = '12298360';

  public heroes = List<Hero>();

  constructor(private _heroService: HeroService, private _router: Router) { }

  ngOnInit() {
    this._heroService.getHeroes().then(heroes => this.heroes = List<Hero>(heroes.slice(1, 5)));
  }

  gotoDetail(hero: Hero) {
    this._router.navigate(['HeroDetail', { id: hero.id }]);
  }
}
