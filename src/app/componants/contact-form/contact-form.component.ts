import { OdersService } from './../../services/oders.service';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SecondaryPageheaderComponent } from '../pageHeaders/secondary-pageheader/secondary-pageheader.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, SecondaryPageheaderComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  title = 'send us an email';

  oderForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    notes: new FormControl('', Validators.required),
  });
  constructor(public odersService: OdersService, private http: HttpClient) {}

  removeFromCart(arg0: any, booking?: boolean) {
    if (booking) {
      this.odersService.removeFromCart(arg0, true);
      return;
    }
    this.odersService.removeFromCart(arg0);
  }

  sendEmail(event: Event) {
    event.preventDefault();

    if (this.oderForm.valid) {
      const emailData = {
        clientInfo: this.oderForm.value,
        cart: this.odersService.cart(),
        serviceBooked: this.odersService.bookedService(),
      };
      this.http.post('/php/getAQuote.php', emailData).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
      console.log(emailData);
    }
  }
}
