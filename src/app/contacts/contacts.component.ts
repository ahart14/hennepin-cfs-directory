import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import 'rxjs/add/operator/filter'

@Component({
 selector: 'app-contacts',
 templateUrl: './contacts.component.html',
 styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
 contacts: Contact[];

 constructor(private contactService: ContactService) { }

 ngOnInit() {
   this.getContacts();
 }

 getContacts(): void {
   this.contactService.getContacts()
       .subscribe(contacts => this.contacts = contacts);
 }
  //sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  //initializing p to one
  p: number = 1;
}