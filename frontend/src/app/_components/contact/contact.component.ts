import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../_services/contact.service';
import { Contact } from '../../_models/contact';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = new Contact(0, '', '', '');

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  addContact(f) {
    this.contactService.storeContact(this.contact)
      .subscribe(
        (data: any) => {
          window.alert('The message has been successfully sent.\nThank you for your input!');
          f.reset();
          let $element = $('#contactAlert');
          $element.hide();
        },
        err => {
          let $element = $('#contactAlert');
          $element.html(err.error.error);
          $element.show();
        }
      );
    }
}
