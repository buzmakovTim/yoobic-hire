import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public sideMenuLinks = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Photos', url: '/home', icon: 'paper-plane' },
    { title: 'Available Missions', url: '/home', icon: 'heart' },
    { title: 'Movies Search', url: '/movies-page', icon: 'archive' },
    { title: 'Chat', url: '/home', icon: 'trash' },
  ];

  constructor() {}
}
