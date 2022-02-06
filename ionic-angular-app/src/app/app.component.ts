import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public sideMenuLinks = [
    { title: 'Dashboard', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Photos', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Available Missions', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Master List', url: '/folder/Archived', icon: 'archive' },
    { title: 'Chat', url: '/folder/Chat', icon: 'trash' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() {}
}
