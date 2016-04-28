import {Component} from 'angular2/core';

@Component({
  selector: 'uslugi',
  templateUrl: 'app/views/standardy/standardy.component.html',
  styleUrls: ['app/views/standardy/standardy.component.css']
})

export class StandardyComponent {
  title: string = 'NASZA OFERTA';
  body: string = 'Opis usług: ';
  message: string;
}
