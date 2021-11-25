import React from 'react';
import createComponent from '../../createComponent';
import { BaseProps, EventHandler } from '../base';

export interface VideoProps extends BaseProps {
  src: string;
  autoplay?: boolean;
  poster?: string;
  loop?: boolean;
  showFullscreenBtn?: boolean;
  showPlayBtn?: boolean;
  controls?: boolean;
  objectFit?: 'contain' | 'fill' | 'cover';
  playBtnPosition?: 'center' | 'bottom';
  preRollUnitId?: string;
  postRollUnitId?: string;
  vslideGestureInFullscreen?: boolean;
  enableProgressGesture?: boolean;
  enablePlayGesture?: boolean;
  muted?: boolean;
  showMuteBtn?: boolean;
  showPlaybackRateBtn?: boolean;
  direction?: 0 | 90 | -90;
  enablePlayInBackground?: boolean;
  onPlay?: EventHandler;
  onPause?: EventHandler;
  onEnded?: EventHandler;
  onError?: EventHandler;
  onTimeUpdate?: EventHandler;
  onFullscreenChange?: EventHandler;
  onWaiting?: EventHandler;
  onAdStart?: EventHandler;
  onAdEnded?: EventHandler;
  onAdLoad?: EventHandler;
  onAdClose?: EventHandler;
  onAdError?: EventHandler;
  onLoadedMetaData?: EventHandler;
  onSeekComplete?: EventHandler;
  onPlayBackRateChange?: EventHandler;
  onMuteChange?: EventHandler;
  onControlTap?: EventHandler;
  onEnterBackground?: EventHandler;
  onCloseBackground?: EventHandler;
  onLeaveBackground?: EventHandler;
}

export const Video: React.ComponentType<VideoProps> = createComponent<VideoProps>('video')

