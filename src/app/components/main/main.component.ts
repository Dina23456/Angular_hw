import {Component, OnInit} from '@angular/core';
import {Users} from '../../model/users';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users: Users[] = [];

  constructor() {
  }

  name = new FormControl('', [Validators.required, Validators.minLength(1)]);
  age = new FormControl('', [Validators.required, Validators.minLength(1)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  myForm = new FormGroup({
    name: this.name,
    age: this.age,
    email: this.email,
    phone: this.phone
  });

  ngOnInit(): void {
  }

  onFormSubmit(myForm: FormGroup): void {
    this.users.push({
      name: myForm.controls.name.value,
      age: myForm.controls.age.value,
      email: myForm.controls.email.value,
      phone: myForm.controls.phone.value
    });
  }
}

