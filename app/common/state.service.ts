import {Injectable} from 'angular2/core';

@Injectable()
export class StateService {
 private _message = 'Wpisz info';

  getMessage(): string {
    return this._message;
  };

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };
}
