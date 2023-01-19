import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService, private http: HttpClient) {}

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title, {
      positionClass: 'toast-bottom-left',
    });
  }

  showError(message: string, title: string) {
    this.toastr.error(message, title, {
      positionClass: 'toast-bottom-left',
    });
  }

  showInfo(message: string, title: string) {
    this.toastr.info(message, title, {
      positionClass: 'toast-bottom-left',
    });
  }

  showWarning(message: string, title: string) {
    this.toastr.warning(message, title, {
      positionClass: 'toast-bottom-left',
    });
  }

  getVlaue() {
    return this.http.get('localhost:8080/api/users');
  }
}
