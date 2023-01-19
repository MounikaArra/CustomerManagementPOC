import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { NotificationService } from '../services/notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuradGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canActivate', this.authService.isLoggedIn);
    if (this.authService.isLoggedIn !== true) {
      this.notificationService.showError('Please login first', 'Unknown user');
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }
}
