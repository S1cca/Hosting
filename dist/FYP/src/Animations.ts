import {
  AnimationReferenceMetadata,
  animation,
  style,
  animate,
  keyframes,
} from '@angular/animations';
import { DEFAULT_TIMING } from './utils';

export const shake = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.1 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.2 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.3 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.4 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.5 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.6 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.7 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.8 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.9 }),
      style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const bounce = animation(
  [
    style({ transform: 'translate3d(0, 0, 0)' }),
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({ transform: 'translate3d(0, 0, 0)', offset: 0.2 }),
        style({ transform: 'translate3d(0, -30px, 0)', offset: 0.4 }),
        style({ transform: 'translate3d(0, 0, 0)', offset: 0.53 }),
        style({ transform: 'translate3d(0, -15px, 0)', offset: 0.7 }),
        style({ transform: 'translate3d(0, -4px, 0)', offset: 0.9 }),
        style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
      ])
    ),
  ],
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const flash = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ opacity: 1 }),
      style({ opacity: 0 }),
      style({ opacity: 1 }),
      style({ opacity: 0 }),
      style({ opacity: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);
