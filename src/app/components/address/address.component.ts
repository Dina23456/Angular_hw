import {Component, Input, OnInit} from '@angular/core';
import {AddressModel} from '../../model/address.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input()
  address: AddressModel;
  constructor() { }

  ngOnInit(): void {
  }

}
