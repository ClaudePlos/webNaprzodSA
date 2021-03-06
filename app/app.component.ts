import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HomePageComponent} from './homePage.component';
import {Inne1Component} from './inne1/inne1.component';
import {HeroService} from './hero.service';
import {StateService} from './common/state.service';
import {ExperimentsService} from './common/experiments.service';
import {OFirmieComponent} from './views/oFirmie/oFirmie.component';
import {UslugiComponent} from './views/uslugi/uslugi.component';
import {StandardyComponent} from './views/standardy/standardy.component';
import {KontaktyComponent} from './views/kontakty/kontakty.component';
import {HTTPTestComponent} from './http-test.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, HTTPTestComponent],
  providers: [HeroService, StateService, ExperimentsService],
})
@RouteConfig([
  // {path: '/', redirectTo: ['Dashboard'] },
  {path: '/homePage', name: 'HomePage', component: HomePageComponent, useAsDefault: true},
  {path: '/oFirmie', name: 'OFirmie', component: OFirmieComponent},
  {path: '/uslugi', name: 'Uslugi', component: UslugiComponent},
  {path: '/standardy', name: 'Standardy', component: StandardyComponent},
  {path: '/kontakty', name: 'Kontakty', component: KontaktyComponent},
  {path: '/inne1', name: 'Inne1', component: Inne1Component},
  {path: '/heroes', name: 'Heroes', component: HeroesComponent},
  {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class AppComponent {
  public title = '';
}
