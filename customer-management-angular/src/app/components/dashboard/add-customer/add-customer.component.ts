import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Model/Cutomer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  customerForm!: FormGroup;
  customer = new Customer();
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      city: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(200),
        ],
      ],
    });
  }

  save() {
    console.log(localStorage.getItem('token'));
    if (
      localStorage.getItem('token') == null ||
      localStorage.getItem('token') == undefined
    ) {
      this.route.navigateByUrl('/login');
    }
    console.log('value is');
    console.log(this.customerForm.value);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    const customerForm = {
      firstName: this.customerForm.value.firstName,
      lastName: this.customerForm.value.lastName,
      city: this.customerForm.value.city,
      phone: this.customerForm.value.phone,
      description: this.customerForm.value.description,
    };

    this.customerService.addCustomer(customerForm).subscribe({
      next: (data) => console.log('response', data),
      error: (e) => console.log('error', e),
    });
    //  this.customerForm.reset();
  }
}
