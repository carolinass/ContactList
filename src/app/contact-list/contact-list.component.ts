import { Component, OnInit } from '@angular/core';
import { Contact } from "../contact";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  private contacts : Contact[];

  constructor() {
  	this.contacts = [
  		new Contact("Andrea", "123456345"),
  		new Contact("Adal", "345564234"),
  		new Contact("Kamila", "7656345523")
  	]
  }

  ngOnInit() {
  }

}
