import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { // app class defined how this component behaves
  // and the logic via methods and props associated with it

  protected readonly title = signal('hello-world'); // protected means can only be used by this class?
  // readonly prevents from being overwritten
  protected messageColour = signal('green');
  protected messageID = signal('StudentMessage-01');
  protected message = signal('Hello student from Lab02');

  constructor() {
    this.title.set('hello-world-new-title');
  }

  protected alertMessage = signal("This is an alert");

  protected sendAlertMessage() {
    alert(this.alertMessage);
  }
}
