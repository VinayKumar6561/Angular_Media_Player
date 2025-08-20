declare module 'videojs-contrib-quality-menu' {
  import videojs from 'video.js';

  interface QualityMenuOptions {
    defaultResolution?: string | null;
    sdBitrateLimit?: number;
    useResolutionLabels?: boolean;
    resolutionLabelBitrates?: boolean;
  }

  const qualityMenu: (this: videojs.Player, options?: QualityMenuOptions) => void;

  export default qualityMenu;
}
