import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss'],
})
export class AppLoginComponent implements OnInit {
  size: NzButtonSize = 'default';
  login: any = { username: '', password: '' };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  tapLogin() {
    this.router.navigate(['/home']);
  }
}
