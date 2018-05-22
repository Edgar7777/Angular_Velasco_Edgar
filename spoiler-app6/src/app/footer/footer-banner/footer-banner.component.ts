import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-banner',
  templateUrl: './footer-banner.component.html',
  styleUrls: ['./footer-banner.component.css']
})
export class FooterBannerComponent implements OnInit {

  urlRedSocial1 = 'http://cioal.com/wp-content/uploads/sites/2/2014/11/logo-facebook-720x717.jpg';
  urlRedSocial2 = 'https://pbs.twimg.com/profile_images/875087697177567232/Qfy0kRIP_400x400.jpg';

  constructor() { }

  ngOnInit() {
  }

}
