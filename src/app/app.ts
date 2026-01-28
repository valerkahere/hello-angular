import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hello-world');
  protected messageColour = signal('green');
  protected messageID = signal('StudentMessage-01');
  protected message = signal('Hello student from Lab02');

  constructor() {
    this.title.set('hello-world-new-title');
  }
}
