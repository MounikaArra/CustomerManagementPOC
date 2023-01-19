import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-updated-customer',
  templateUrl: './updated-customer.component.html',
  styleUrls: ['./updated-customer.component.scss'],
})
export class UpdatedCustomerComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  public customer = {
    city: null,
    createAt: null,
    description: null,
    firstName: null,
    id: null,
    lastName: null,
    phone: null,
    updatedAt: null,
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      let cId = params['id'];
      console.log(cId); // Print the parameter to the console.
      this.customerService.getCustomerById(cId).subscribe((customer) => {
        console.log(customer); // Print the parameter to the console
        this.customer = customer;
      });
    });
  }

  back(): void {
    this.router.navigate(['welcome']);
  }
  updateDetails(id: any) {
    console.log('update details', this.customer);
    this.customerService
      .upadteCustomer(id, this.customer)
      .subscribe((customer) => {
        console.log('updates customer information', customer); // Print the parameter to the console
        this.notificationService.showSuccess('updated successfully', 'Done');
        this.router.navigate(['welcome']);
      });
  }
}
