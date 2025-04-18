import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'proyecto-tailwind';
  isDarkMode = false;

toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;
  const html = document.documentElement;
  if (this.isDarkMode) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
}
}
