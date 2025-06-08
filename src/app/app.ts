import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrailList } from './features/trails/components/trail-list/trail-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TrailList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ExploreRio';
}
