import { Injectable, signal } from '@angular/core';
import { Theme } from '../models/theme.model';
import { effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public theme = signal<Theme>({ mode: 'dark', color: 'base' });

  constructor() {
    if (this.isLocalStorageAvailable()) {
      this.loadTheme();
      effect(() => {
        this.setTheme();
      });
    }
  }

  private loadTheme() {
    if (this.isLocalStorageAvailable()) {
      const theme = localStorage.getItem('theme');
      if (theme) {
        this.theme.set(JSON.parse(theme));
      }
    }
  }

  private setTheme() {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('theme', JSON.stringify(this.theme()));
    }
    this.setThemeClass();
  }

  public get isDark(): boolean {
    return this.theme().mode == 'dark';
  }

  private setThemeClass() {
    document.querySelector('html')!.className = this.theme().mode;
    document.querySelector('html')!.setAttribute('data-theme', this.theme().color);
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__localStorageTest__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}
