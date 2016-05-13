import {Component, OnInit} from 'angular2/core';
import {HTTPTestService} from './http-test.service';

class User {
  name: string;
  email: string;
  rating: number;
}

@Component({
    selector: 'http-test',
    template: `
    <button (click)="onTestGet()">Test get</button><br>
    <p>Output: {{getData}}</p>
    <button (click)="onTestPost()">Test post</button><br>
    <p>Output: {{postData}}</p>
    <button (click)="onGetUsers()">Test users</button><br>
    <p>Output: {{contacts}}</p>
    
    <h1>Angular2 HTTP Demo App</h1>
    <h2>Users</h2>
    <ul>
        <li *ngFor="#user of users">{{user.prcId}}, {{user.uzNazwa}}</li>
    </ul>
    
    `,
    providers: [HTTPTestService]
})
export class HTTPTestComponent implements OnInit {
    getData: string;
    postData: string;
    contacts: string;
    public users = [{}];

    constructor (private _httpService: HTTPTestService) {}

    ngOnInit() {
            this.onGetUsers();
        }

    onTestGet() {
        this._httpService.getCurrentTime()
        .subscribe(
             data => this.getData = JSON.stringify(data),
             error => alert(error),
             () => console.log('Finished')
         );
    }

    onTestPost() {
       this._httpService.postJSON()
       .subscribe(
             data => this.postData = JSON.stringify(data),
             error => alert(error),
             () => console.log('Finished')
         );
    }

    onGetUsers() {
        this._httpService.getUsers()
        .subscribe(
             data => this.users = data,
             error => alert(error),
             () => console.log('Finished')
         );
    }
}
