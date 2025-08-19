import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { VideoPlayerComponent } from './video-player/video-player'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, VideoPlayerComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  // No code needed here
}