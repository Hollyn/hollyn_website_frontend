import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hd-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  darkTheme: boolean = false;
  constructor() {}

  checkCheckThemeValue(event: any) {
    if (event.target.checked) {
      this.changeTheme('dark');
    } else {
      this.changeTheme('light');
    }
  }
  // change theme function
  changeTheme(theme: string) {
    localStorage.setItem('theme', theme);

    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
  }

  init() {
    let currentTheme = localStorage.getItem('theme') || 'light';
    this.changeTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);

    if (currentTheme == 'dark') {
      this.darkTheme = true;
    }
  }

  ngOnInit(): void {
    this.init();
  }
}
