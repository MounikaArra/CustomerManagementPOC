import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.scss'],
})
export class SigupComponent implements OnInit {
  private nodesList = [
    {
      id: 1,
      title: 'Acreage private file',
      subTitle: '',
      disable: false,
      borderColor: '#7EA6E0',
      action: 'uploadFile',
      type: '',
    },
    {
      id: 2,
      title: 'DSU',
      subTitle: '(private file)',
      disable: false,
      borderColor: '#7EA6E0',
      action: 'uploadFile',
      type: '',
    },
    {
      id: 3,
      title: 'TGS',
      subTitle: '',
      disable: true,
      borderColor: '#4E677B',
      action: 'uploadFile',
      type: 'vendor',
    },
    {
      id: 4,
      title: 'IHS',
      subTitle: '',
      disable: true,
      borderColor: '#4E677B',
      action: 'uploadFile',
      type: 'vendor',
    },
    {
      id: 5,
      title: 'Enverus',
      subTitle: '',
      disable: true,
      borderColor: '#4E677B',
      action: 'uploadFile',
      type: 'vendor',
    },

    {
      id: 6,
      title: 'TGS',
      subTitle: '',
      disable: true,
      borderColor: '#4E677B',
      action: 'uploadFile',
      type: 'vendor',
    },
    {
      id: 7,
      title: 'IHS',
      subTitle: '',
      disable: true,
      borderColor: '#4E677B',
      action: 'uploadFile',
      type: 'vendor',
    },
    {
      id: 8,
      title: 'Enverus',
      subTitle: '',
      disable: true,
      borderColor: '#4E677B',
      action: 'uploadFile',
      type: 'vendor',
    },

    {
      id: 9,
      title: 'Well Completions',
      subTitle: 'private file',
      disable: false,
      borderColor: '#7EA6E0',
      action: 'uploadFile',
      type: 'vendor',
    },
    {
      id: 10,
      title: 'Enverus',
      subTitle: '',
      disable: true,
      borderColor: '#4E677B',
      action: 'uploadFile',
      type: 'vendor',
    },

    {
      id: 11,
      title: 'Acreage Notebook',
      subTitle: '',
      disable: false,
      borderColor: '#B266FF',
      action: 'uploadFile',
      type: 'vendor',
    },

    {
      id: 12,
      title: 'DSU Notebook',
      subTitle: '',
      disable: false,
      borderColor: '#B266FF',
      action: 'uploadFile',
      type: 'vendor',
    },

    {
      id: 13,
      title: 'DIR_SURVEY Notebook',
      subTitle: '',
      disable: false,
      borderColor: '#B266FF',
      action: 'uploadFile',
      type: 'vendor',
    },

    {
      id: 14,
      title: 'Completions Notebook',
      subTitle: '',
      disable: false,
      borderColor: '#B266FF',
      action: 'uploadFile',
      type: 'vendor',
    },

    {
      id: 15,
      title: 'Trigger Acreage',
      subTitle: '',
      disable: false,
      borderColor: '#FF9933',
      action: 'uploadFile',
      type: 'vendor',
    },

    {
      id: 16,
      title: 'Trigger DSU',
      subTitle: '',
      disable: false,
      borderColor: '#FF9933',
      action: 'uploadFile',
      type: 'vendor',
    },

    {
      id: 17,
      title: 'Trigger DIR_SURVEY',
      subTitle: '',
      disable: false,
      borderColor: '#FF9933',
      action: 'uploadFile',
      type: 'vendor',
    },

    {
      id: 18,
      title: 'Trigger Well Completions',
      subTitle: '',
      disable: false,
      borderColor: '#FF9933',
      action: 'uploadFile',
      type: 'vendor',
    },
    {
      id: 19,
      title: 'DSU.Operator',
      subTitle: '',
      disable: true,
      borderColor: '#4E677B',
      action: 'uploadFile',
      type: 'vendor',
    },
    {
      id: 20,
      title: 'Well.DSU',
      subTitle: '',
      disable: true,
      borderColor: '#4E677B',
      action: 'uploadFile',
      type: 'vendor',
    },

    {
      id: 21,
      title: 'DSU.MaxLL',
      subTitle: '',
      disable: true,
      borderColor: '#4E677B',
      action: 'uploadFile',
      type: 'vendor',
    },

    {
      id: 22,
      title: 'DSU.MaxWell',
      subTitle: '',
      disable: true,
      borderColor: '#4E677B',
      action: 'uploadFile',
      type: 'vendor',
    },

    {
      id: 23,
      title: 'DSU.Operator.merge',
      subTitle: '',
      disable: false,
      borderColor: '#4E677B',
      action: 'uploadFile',
      type: 'vendor',
    },
    {
      id: 24,
      title: 'Operator Assignment Notebook',
      subTitle: '',
      disable: false,
      borderColor: '#FF3333',
      action: 'uploadFile',
      type: 'vendor',
    },

    {
      id: 25,
      title: 'Trigger Operator Assignment',
      subTitle: '',
      disable: true,
      borderColor: '#97D077',
      action: 'uploadFile',
      type: 'vendor',
    },
  ];

  private edgeList = [
    { source: 1, destinaion: 11 },
    { source: 2, destinaion: 12 },
    { source: 3, destinaion: 13 },
    { source: 4, destinaion: 13 },
    { source: 5, destinaion: 13 },
    { source: 6, destinaion: 14 },
    { source: 7, destinaion: 14 },
    { source: 8, destinaion: 14 },
    { source: 9, destinaion: 14 },
    { source: 10, destinaion: 11 },
    { source: 11, destinaion: 15 },
    { source: 12, destinaion: 16 },
    { source: 13, destinaion: 17 },
    { source: 14, destinaion: 19 },
    { source: 15, destinaion: 19 },
    { source: 16, destinaion: 19 },
    { source: 17, destinaion: 19 },
    { source: 17, destinaion: 20 },
    { source: 18, destinaion: 19 },
    { source: 19, destinaion: 22 },
    { source: 20, destinaion: 21 },
    { source: 20, destinaion: 22 },
    { source: 21, destinaion: 23 },
    { source: 22, destinaion: 19 },
    { source: 23, destinaion: 24 },
    { source: 24, destinaion: 25 },
  ];

  isloading: boolean = false;
  public error = null;
  public form = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  };
  constructor(
    private auth: AuthService,
    private notification: NotificationService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isloading = true;
    console.log('mounika', this.form);
    const user = {
      name: this.form.name,
      username: this.form.username,
      email: this.form.email,
      password: this.form.password,
      role: 'ROLE_USER',
    };
    this.auth.signUp(user).subscribe({
      next: (data) => {
        this.notification.showSuccess('Done ', 'Successfully completed');
        this.route.navigateByUrl('login');
      },
      error: (e) => {
        console.log('eror', e.error);
        console.log('eror ', e);
        console.log(e.error.text);
        this.error = e.error;
        this.notification.showError('Error', e.error);
      },
      complete() {
        console.log('complete');
      },
    });
  }
}
