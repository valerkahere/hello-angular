import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
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
    alert(this.alertMessage());
  }

  protected myTasks = signal<string[]>([]);

  protected tasks = signal([
    'create test apps',
    'practice github',
    'study ts basics'
  ]);


  protected addTask(task:string) {
    this.myTasks.update(current => [...current, task]);
  }

  protected deleteTask(index:number) {
    this.tasks.update(tasks =>
        tasks.filter((_, i) => i !== index)
    );
  }


}
