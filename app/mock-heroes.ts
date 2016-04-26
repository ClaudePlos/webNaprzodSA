import { Hero } from './hero';
import { List } from 'immutable';
import uuid from 'node-uuid';

export var HEROES = List<Hero>([
  {'id': uuid.v4(), 'name': 'N'},
  {'id': uuid.v4(), 'name': 'N'},
  {'id': uuid.v4(), 'name': 'A'},
  {'id': uuid.v4(), 'name': 'P'},
  {'id': uuid.v4(), 'name': '.'},
  {'id': uuid.v4(), 'name': 'Pan2'},
  {'id': uuid.v4(), 'name': 'Pan3'},
  {'id': uuid.v4(), 'name': 'Pani1'},
  {'id': uuid.v4(), 'name': 'Pani2'},
  {'id': uuid.v4(), 'name': 'Pani3'}
]);
