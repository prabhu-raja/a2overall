import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { User } from '../model/user';

@Injectable()
export class PocService {

  private userUrl: string = 'https://reqres.in/api/users';
  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(this.userUrl)
      .map(res => res.json().data)
      .map(resUser => resUser.map(this.formatToFEUser));
  }

  private formatToFEUser(objUser): User {
    return {
      avatar: objUser.avatar,
      displayName: `${objUser.last_name},${objUser.first_name} `,
      firstName: objUser.first_name,
      id: objUser.id,
      lastName: objUser.last_name
    };
  }
}