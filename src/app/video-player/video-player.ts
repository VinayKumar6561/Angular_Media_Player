import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-hls-quality-selector';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-player.html',
  styleUrls: ['./video-player.scss']
})
export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoPlayer', { static: true }) videoElementRef!: ElementRef;

  videoUrl: string = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
  player: any;

  ngAfterViewInit(): void {
    this.player = videojs(this.videoElementRef.nativeElement, {
      controls: true,
      fluid: true,
      autoplay: false,
      responsive: true,
    });

    // ✅ This adds the Quality button
    this.player.hlsQualitySelector({
      displayCurrentQuality: true
    });
  }

  ngOnDestroy(): void {
    if (this.player) this.player.dispose();
  }
}
