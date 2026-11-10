import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Navbar {
  protected readonly title = signal('app');
}
