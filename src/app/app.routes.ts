import { Routes } from '@angular/router';
import { Home } from './components/home/home'; 
import { About } from './components/about/about'; 
import { VideoPlayerComponent } from './video-player/video-player'; 
import { LoginComponent } from './components/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'player', component: VideoPlayerComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' } 
];
