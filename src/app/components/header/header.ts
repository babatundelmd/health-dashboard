import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  activeItem = signal<string>('patients');

  setActive(event: Event, item: string): void {
    event.preventDefault();
    this.activeItem.set(item);
  }
}
