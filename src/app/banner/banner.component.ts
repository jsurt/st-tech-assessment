import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  // Below, changed 'private' to 'public' because the members of the component accessed by
  // a template should be public (StackOverflow: https://stackoverflow.com/a/43177386/10187723)
  constructor(public appService: AppService, public router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.appService.username = '';
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

}
