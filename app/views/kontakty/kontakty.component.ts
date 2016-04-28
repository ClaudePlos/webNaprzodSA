import {Component} from 'angular2/core';

@Component({
  selector: 'kontakty',
  templateUrl: 'app/views/kontakty/kontakty.component.html',
  styleUrls: ['app/views/kontakty/kontakty.component.css']
})

export class KontaktyComponent {
  title: string = 'NASZA OFERTA';
  body: string = 'Opis usług: ';
  message: string;
}
