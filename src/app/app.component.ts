import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DashBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bot';
}
