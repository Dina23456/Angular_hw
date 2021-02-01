import {Component, Input, OnInit} from '@angular/core';
import {Users} from '../../model/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input()
user: Users;
  constructor() { }

  ngOnInit(): void {
  }

}
