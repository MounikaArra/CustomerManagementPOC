import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public error = null;
  public isLoading = false;
  public hide = true;

  public form = {
    usernameOrEmail: null,
    password: null,
  };

  constructor(
    private auth: AuthService,
    private notification: NotificationService,
    private route: Router
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    this.isLoading = true;
    this.auth.signIn(this.form).subscribe({
      next: (data) => {
        this.notification.showSuccess('Logged in ', 'Log in successfully');
        this.auth.setToStorage(data);
        this.route.navigateByUrl('welcome');
      },
      error: (e) => {
        console.log('eror', e);
        console.log(e.error.message);
        this.error = e.error.message;
        this.notification.showError('Error', e.error.message);
      },
      complete() {
        console.log('complete');
      },
    });
  }
}
