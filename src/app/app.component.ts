import { Component } from '@angular/core';
import { ThemeService } from './theme.service'; // Certifique-se de que o caminho está correto

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thema';

  constructor(public themeService: ThemeService) { }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkTheme(): boolean {
    return this.themeService.isDarkTheme();
  }
}
