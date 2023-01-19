import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  @Input() customer: any;
  authenticatedUser: boolean = false;

  constructor(
    private authService: AuthService,
    private customerService: CustomerService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  @Output() updateCustomer = new EventEmitter();
  ngOnInit(): void {
    this.authService.getUserrDeatils().subscribe(
      () => {},
      (e) => {
        this.authenticatedUser = e.status === 500;
      }
    );
  }

  deleteCustomer(customer: any) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      console.log('yes');

      this.customerService.deleteCustomer(customer.id).subscribe((response) => {
        console.log('deleted succefully', response);
        this.notificationService.showSuccess(
          'Deleted ',
          ' Deleted successfully'
        );
      });
    } else {
      console.log('no');
    }
  }

  editCustomer(id: any) {
    this.router.navigate(['update-customer/', id]);
  }
}
