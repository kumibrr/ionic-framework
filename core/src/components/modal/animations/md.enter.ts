import { createAnimation } from '@utils/animation/animation';
import { getElementRoot } from '@utils/helpers';

import type { Animation } from '../../../interface';
import type { ModalAnimationOptions } from '../modal-interface';

import { createSheetEnterAnimation } from './sheet';

const createEnterAnimation = () => {
  const backdropAnimation = createAnimation()
    .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
    .beforeStyles({
      'pointer-events': 'none',
    })
    .afterClearStyles(['pointer-events']);

  const wrapperAnimation = createAnimation().keyframes([
    { offset: 0, opacity: 0.01, transform: 'translateY(40px)' },
    { offset: 1, opacity: 1, transform: `translateY(0px)` },
  ]);

  return { backdropAnimation, wrapperAnimation, containerAnimation: undefined, contentAnimation: undefined };
};

/**
 * Md Modal Enter Animation
 */
export const mdEnterAnimation = (baseEl: HTMLElement, opts: ModalAnimationOptions): Animation => {
  const { currentBreakpoint, animateContentHeight } = opts;
  const root = getElementRoot(baseEl);
  const { wrapperAnimation, backdropAnimation, containerAnimation, contentAnimation } =
    currentBreakpoint !== undefined ? createSheetEnterAnimation(opts) : createEnterAnimation();

  backdropAnimation.addElement(root.querySelector('ion-backdrop')!);

  wrapperAnimation.addElement(root.querySelector('.modal-wrapper')!);

  containerAnimation?.addElement(baseEl.querySelector('.ion-page')!);
  const directChildren = Array.from(baseEl.querySelector('.ion-page')!.children);
  contentAnimation?.addElement(directChildren);

  const baseAnimation = createAnimation()
  .addElement(baseEl)
  .easing('cubic-bezier(0.36,0.66,0.04,1)')
  .duration(280)
  .addAnimation([backdropAnimation, wrapperAnimation]);

  if (animateContentHeight && containerAnimation && contentAnimation ) {
    baseAnimation.addAnimation(containerAnimation);
    baseAnimation.addAnimation(contentAnimation);
  }

  return baseAnimation;
};
