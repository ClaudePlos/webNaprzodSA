import {Component} from 'angular2/core';

@Component({
  selector: 'uslugi',
  templateUrl: 'app/views/uslugi/uslugi.component.html',
  styleUrls: ['app/views/uslugi/uslugi.component.css']
})

export class UslugiComponent {
  title: string = 'NASZA OFERTA';
  body: string = 'Opis usług: ';
  message: string;

}
