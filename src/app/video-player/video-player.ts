import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

// Import quality level helper and the menu plugin
import 'videojs-contrib-quality-levels';
import qualityMenu from 'videojs-contrib-quality-menu';

// Register the plugin with Video.js
videojs.registerPlugin('qualityMenu', qualityMenu);

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-player.html',
  styleUrls: ['./video-player.scss']
})
export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoPlayer', { static: true }) videoElementRef!: ElementRef;
  videoUrl = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
  player: any;

  ngAfterViewInit(): void {
    this.player = videojs(this.videoElementRef.nativeElement, {
      controls: true,
      fluid: true,
      autoplay: false,
      responsive: true,
      controlBar: {
        children: [
          'playToggle',
          'volumePanel',
          'currentTimeDisplay',
          'timeDivider',
          'durationDisplay',
          'progressControl',
          'remainingTimeDisplay',
          'playbackRateMenuButton',
          'pictureInPictureToggle',
          'fullscreenToggle'
        ]
      }
    });

    this.player.ready(() => {
      this.player.qualityMenu({
        defaultResolution: null,
        sdBitrateLimit: 2000000,
        useResolutionLabels: true,
        resolutionLabelBitrates: false
      });
    });
  }

  ngOnDestroy(): void {
    if (this.player) this.player.dispose();
  }
}
