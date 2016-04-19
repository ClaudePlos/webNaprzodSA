import { Hero } from './hero';
import { List } from 'immutable';
import uuid from 'node-uuid';

export var HEROES = List<Hero>([
  {'id': uuid.v4(), 'name': 'Pan1'},
  {'id': uuid.v4(), 'name': 'Kowalski'},
  {'id': uuid.v4(), 'name': 'Zieliński'},
  {'id': uuid.v4(), 'name': 'Gołota'},
  {'id': uuid.v4(), 'name': 'Kowalczyk'},
  {'id': uuid.v4(), 'name': 'Pan2'},
  {'id': uuid.v4(), 'name': 'Pan3'},
  {'id': uuid.v4(), 'name': 'Pani1'},
  {'id': uuid.v4(), 'name': 'Pani2'},
  {'id': uuid.v4(), 'name': 'Pani3'}
]);
