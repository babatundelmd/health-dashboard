import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  activeItem = signal<string>('patients');
  mobileMenuOpen = signal<boolean>(false);

  setActive(event: Event, item: string): void {
    event.preventDefault();
    this.activeItem.set(item);
    this.mobileMenuOpen.set(false); // Close mobile menu when item is selected
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }
}
