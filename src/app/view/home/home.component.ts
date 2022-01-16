import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute,private title:Title) {}

  ngOnInit(): void {
    this.setTitle()
  }

  // 帐号注销
  tapCancellation() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  setTitle(){
    const paramer = this.route.params, resdata:any = this.route.data
    this.title.setTitle(resdata._value.title)
    console.log(resdata);

  }

  // Letf Navgiation
  tapNavgiationLeft(event:any){
    this.setTitle()

    console.log(event);
  }

  // END
}
