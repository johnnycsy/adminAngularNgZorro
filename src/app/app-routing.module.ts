import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './Login/app-login/app-login.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  { path: '', component: AppLoginComponent, data: { title: '后台登录' } },
  { path: 'home', component: HomeComponent, data: { title: '后台首页' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
