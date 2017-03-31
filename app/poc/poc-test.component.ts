import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { PocService } from './services/poc.service';

@Component({
  moduleId: module.id,
  selector: 'poctest',
  templateUrl: '/app/poc/poc-test.component.html',
  providers: [PocService]
})
export class PocTestComponent implements OnInit {
  test_twoway: string = '';
  reqresUsers: User[];

  constructor(private service: PocService) { }

  myinit() {
    this.test_twoway = "Hello..";
    this.service.getUsers()
      .subscribe(res => this.reqresUsers = res);
  }

  ngOnInit() {
    this.myinit();
  }
}