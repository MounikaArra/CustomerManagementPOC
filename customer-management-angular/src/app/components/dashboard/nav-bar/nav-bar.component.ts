import { AuthGuradGuard } from './../../../shared/auth-gurad.guard';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private authservice: AuthService, private router: Router) {}

  user: any;

  ngOnInit(): void {
    this.authservice.getUserrDeatils().subscribe((userr) => {
      console.log('user is', userr);
      if (!userr) {
        this.logout();
        return;
      }
      this.user = userr;
    });
  }

  logout() {
    this.authservice.remove();
    this.router.navigate(['login']);
  }
}
