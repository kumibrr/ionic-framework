/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ionic/core';


@ProxyCmp({
  inputs: ['disabled', 'mode', 'readonly', 'toggleIcon', 'toggleIconSlot', 'value']
})
@Component({
  selector: 'ion-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'mode', 'readonly', 'toggleIcon', 'toggleIconSlot', 'value'],
})
export class IonAccordion {
  protected el: HTMLIonAccordionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonAccordion extends Components.IonAccordion {}


@ProxyCmp({
  inputs: ['animated', 'disabled', 'expand', 'mode', 'multiple', 'readonly', 'value']
})
@Component({
  selector: 'ion-accordion-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'disabled', 'expand', 'mode', 'multiple', 'readonly', 'value'],
})
export class IonAccordionGroup {
  protected el: HTMLIonAccordionGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}


import type { AccordionGroupChangeEventDetail as IIonAccordionGroupAccordionGroupChangeEventDetail } from '@ionic/core';

export declare interface IonAccordionGroup extends Components.IonAccordionGroup {
  /**
   * Emitted when the value property has changed as a result of a user action such as a click.

This event will not emit when programmatically setting the `value` property.
   */
  ionChange: EventEmitter<CustomEvent<IIonAccordionGroupAccordionGroupChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'mode', 'subHeader', 'translucent', 'trigger'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-action-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'mode', 'subHeader', 'translucent', 'trigger'],
})
export class IonActionSheet {
  protected el: HTMLIonActionSheetElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionActionSheetDidPresent', 'ionActionSheetWillPresent', 'ionActionSheetWillDismiss', 'ionActionSheetDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
  }
}


import type { OverlayEventDetail as IIonActionSheetOverlayEventDetail } from '@ionic/core';

export declare interface IonActionSheet extends Components.IonActionSheet {
  /**
   * Emitted after the action sheet has presented.
   */
  ionActionSheetDidPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the action sheet has presented.
   */
  ionActionSheetWillPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the action sheet has dismissed.
   */
  ionActionSheetWillDismiss: EventEmitter<CustomEvent<IIonActionSheetOverlayEventDetail>>;
  /**
   * Emitted after the action sheet has dismissed.
   */
  ionActionSheetDidDismiss: EventEmitter<CustomEvent<IIonActionSheetOverlayEventDetail>>;
  /**
   * Emitted after the action sheet has presented.
Shorthand for ionActionSheetWillDismiss.
   */
  didPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the action sheet has presented.
Shorthand for ionActionSheetWillPresent.
   */
  willPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the action sheet has dismissed.
Shorthand for ionActionSheetWillDismiss.
   */
  willDismiss: EventEmitter<CustomEvent<IIonActionSheetOverlayEventDetail>>;
  /**
   * Emitted after the action sheet has dismissed.
Shorthand for ionActionSheetDidDismiss.
   */
  didDismiss: EventEmitter<CustomEvent<IIonActionSheetOverlayEventDetail>>;
}


@ProxyCmp({
  inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'inputs', 'isOpen', 'keyboardClose', 'leaveAnimation', 'message', 'mode', 'subHeader', 'translucent', 'trigger'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'inputs', 'isOpen', 'keyboardClose', 'leaveAnimation', 'message', 'mode', 'subHeader', 'translucent', 'trigger'],
})
export class IonAlert {
  protected el: HTMLIonAlertElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionAlertDidPresent', 'ionAlertWillPresent', 'ionAlertWillDismiss', 'ionAlertDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
  }
}


import type { OverlayEventDetail as IIonAlertOverlayEventDetail } from '@ionic/core';

export declare interface IonAlert extends Components.IonAlert {
  /**
   * Emitted after the alert has presented.
   */
  ionAlertDidPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the alert has presented.
   */
  ionAlertWillPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the alert has dismissed.
   */
  ionAlertWillDismiss: EventEmitter<CustomEvent<IIonAlertOverlayEventDetail>>;
  /**
   * Emitted after the alert has dismissed.
   */
  ionAlertDidDismiss: EventEmitter<CustomEvent<IIonAlertOverlayEventDetail>>;
  /**
   * Emitted after the alert has presented.
Shorthand for ionAlertWillDismiss.
   */
  didPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the alert has presented.
Shorthand for ionAlertWillPresent.
   */
  willPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the alert has dismissed.
Shorthand for ionAlertWillDismiss.
   */
  willDismiss: EventEmitter<CustomEvent<IIonAlertOverlayEventDetail>>;
  /**
   * Emitted after the alert has dismissed.
Shorthand for ionAlertDidDismiss.
   */
  didDismiss: EventEmitter<CustomEvent<IIonAlertOverlayEventDetail>>;
}


@ProxyCmp({
  methods: ['setFocus']
})
@Component({
  selector: 'ion-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonApp {
  protected el: HTMLIonAppElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonApp extends Components.IonApp {}


@ProxyCmp({
})
@Component({
  selector: 'ion-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonAvatar {
  protected el: HTMLIonAvatarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonAvatar extends Components.IonAvatar {}


@ProxyCmp({
  inputs: ['stopPropagation', 'tappable', 'visible']
})
@Component({
  selector: 'ion-backdrop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['stopPropagation', 'tappable', 'visible'],
})
export class IonBackdrop {
  protected el: HTMLIonBackdropElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionBackdropTap']);
  }
}


export declare interface IonBackdrop extends Components.IonBackdrop {
  /**
   * Emitted when the backdrop is tapped.
   */
  ionBackdropTap: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color', 'mode']
})
@Component({
  selector: 'ion-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'mode'],
})
export class IonBadge {
  protected el: HTMLIonBadgeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonBadge extends Components.IonBadge {}


@ProxyCmp({
  inputs: ['active', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'separator', 'target']
})
@Component({
  selector: 'ion-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'separator', 'target'],
})
export class IonBreadcrumb {
  protected el: HTMLIonBreadcrumbElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}


export declare interface IonBreadcrumb extends Components.IonBreadcrumb {
  /**
   * Emitted when the breadcrumb has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the breadcrumb loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color', 'itemsAfterCollapse', 'itemsBeforeCollapse', 'maxItems', 'mode']
})
@Component({
  selector: 'ion-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'itemsAfterCollapse', 'itemsBeforeCollapse', 'maxItems', 'mode'],
})
export class IonBreadcrumbs {
  protected el: HTMLIonBreadcrumbsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionCollapsedClick']);
  }
}


import type { BreadcrumbCollapsedClickEventDetail as IIonBreadcrumbsBreadcrumbCollapsedClickEventDetail } from '@ionic/core';

export declare interface IonBreadcrumbs extends Components.IonBreadcrumbs {
  /**
   * Emitted when the collapsed indicator is clicked on.
   */
  ionCollapsedClick: EventEmitter<CustomEvent<IIonBreadcrumbsBreadcrumbCollapsedClickEventDetail>>;
}


@ProxyCmp({
  inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'form', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type']
})
@Component({
  selector: 'ion-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'form', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type'],
})
export class IonButton {
  protected el: HTMLIonButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}


export declare interface IonButton extends Components.IonButton {
  /**
   * Emitted when the button has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['collapse']
})
@Component({
  selector: 'ion-buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapse'],
})
export class IonButtons {
  protected el: HTMLIonButtonsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonButtons extends Components.IonButtons {}


@ProxyCmp({
  inputs: ['button', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type']
})
@Component({
  selector: 'ion-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['button', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type'],
})
export class IonCard {
  protected el: HTMLIonCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCard extends Components.IonCard {}


@ProxyCmp({
  inputs: ['mode']
})
@Component({
  selector: 'ion-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['mode'],
})
export class IonCardContent {
  protected el: HTMLIonCardContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardContent extends Components.IonCardContent {}


@ProxyCmp({
  inputs: ['color', 'mode', 'translucent']
})
@Component({
  selector: 'ion-card-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'mode', 'translucent'],
})
export class IonCardHeader {
  protected el: HTMLIonCardHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardHeader extends Components.IonCardHeader {}


@ProxyCmp({
  inputs: ['color', 'mode']
})
@Component({
  selector: 'ion-card-subtitle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'mode'],
})
export class IonCardSubtitle {
  protected el: HTMLIonCardSubtitleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardSubtitle extends Components.IonCardSubtitle {}


@ProxyCmp({
  inputs: ['color', 'mode']
})
@Component({
  selector: 'ion-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'mode'],
})
export class IonCardTitle {
  protected el: HTMLIonCardTitleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardTitle extends Components.IonCardTitle {}


@ProxyCmp({
  inputs: ['alignment', 'checked', 'color', 'disabled', 'errorText', 'helperText', 'indeterminate', 'justify', 'labelPlacement', 'mode', 'name', 'required', 'value']
})
@Component({
  selector: 'ion-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'checked', 'color', 'disabled', 'errorText', 'helperText', 'indeterminate', 'justify', 'labelPlacement', 'mode', 'name', 'required', 'value'],
})
export class IonCheckbox {
  protected el: HTMLIonCheckboxElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
  }
}


import type { CheckboxChangeEventDetail as IIonCheckboxCheckboxChangeEventDetail } from '@ionic/core';

export declare interface IonCheckbox extends Components.IonCheckbox {
  /**
   * Emitted when the checked property has changed as a result of a user action such as a click.

This event will not emit when programmatically setting the `checked` property.
   */
  ionChange: EventEmitter<CustomEvent<IIonCheckboxCheckboxChangeEventDetail>>;
  /**
   * Emitted when the checkbox has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the checkbox loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color', 'disabled', 'mode', 'outline']
})
@Component({
  selector: 'ion-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'mode', 'outline'],
})
export class IonChip {
  protected el: HTMLIonChipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonChip extends Components.IonChip {}


@ProxyCmp({
  inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']
})
@Component({
  selector: 'ion-col',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs'],
})
export class IonCol {
  protected el: HTMLIonColElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCol extends Components.IonCol {}


@ProxyCmp({
  inputs: ['color', 'fixedSlotPlacement', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY'],
  methods: ['getScrollElement', 'scrollToTop', 'scrollToBottom', 'scrollByPoint', 'scrollToPoint']
})
@Component({
  selector: 'ion-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'fixedSlotPlacement', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY'],
})
export class IonContent {
  protected el: HTMLIonContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionScrollStart', 'ionScroll', 'ionScrollEnd']);
  }
}


import type { ScrollBaseDetail as IIonContentScrollBaseDetail } from '@ionic/core';
import type { ScrollDetail as IIonContentScrollDetail } from '@ionic/core';

export declare interface IonContent extends Components.IonContent {
  /**
   * Emitted when the scroll has started. This event is disabled by default.
Set `scrollEvents` to `true` to enable.
   */
  ionScrollStart: EventEmitter<CustomEvent<IIonContentScrollBaseDetail>>;
  /**
   * Emitted while scrolling. This event is disabled by default.
Set `scrollEvents` to `true` to enable.
   */
  ionScroll: EventEmitter<CustomEvent<IIonContentScrollDetail>>;
  /**
   * Emitted when the scroll has ended. This event is disabled by default.
Set `scrollEvents` to `true` to enable.
   */
  ionScrollEnd: EventEmitter<CustomEvent<IIonContentScrollBaseDetail>>;
}


@ProxyCmp({
  inputs: ['cancelText', 'clearText', 'color', 'dayValues', 'disabled', 'doneText', 'firstDayOfWeek', 'formatOptions', 'highlightedDates', 'hourCycle', 'hourValues', 'isDateEnabled', 'locale', 'max', 'min', 'minuteValues', 'mode', 'monthValues', 'multiple', 'name', 'preferWheel', 'presentation', 'readonly', 'showAdjacentDays', 'showClearButton', 'showDefaultButtons', 'showDefaultTimeLabel', 'showDefaultTitle', 'size', 'titleSelectedDatesFormatter', 'value', 'yearValues'],
  methods: ['confirm', 'reset', 'cancel']
})
@Component({
  selector: 'ion-datetime',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['cancelText', 'clearText', 'color', 'dayValues', 'disabled', 'doneText', 'firstDayOfWeek', 'formatOptions', 'highlightedDates', 'hourCycle', 'hourValues', 'isDateEnabled', 'locale', 'max', 'min', 'minuteValues', 'mode', 'monthValues', 'multiple', 'name', 'preferWheel', 'presentation', 'readonly', 'showAdjacentDays', 'showClearButton', 'showDefaultButtons', 'showDefaultTimeLabel', 'showDefaultTitle', 'size', 'titleSelectedDatesFormatter', 'value', 'yearValues'],
})
export class IonDatetime {
  protected el: HTMLIonDatetimeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionCancel', 'ionChange', 'ionFocus', 'ionBlur']);
  }
}


import type { DatetimeChangeEventDetail as IIonDatetimeDatetimeChangeEventDetail } from '@ionic/core';

export declare interface IonDatetime extends Components.IonDatetime {
  /**
   * Emitted when the datetime selection was cancelled.
   */
  ionCancel: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the value (selected date) has changed.

This event will not emit when programmatically setting the `value` property.
   */
  ionChange: EventEmitter<CustomEvent<IIonDatetimeDatetimeChangeEventDetail>>;
  /**
   * Emitted when the datetime has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the datetime loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color', 'datetime', 'disabled', 'mode']
})
@Component({
  selector: 'ion-datetime-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'datetime', 'disabled', 'mode'],
})
export class IonDatetimeButton {
  protected el: HTMLIonDatetimeButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonDatetimeButton extends Components.IonDatetimeButton {}


@ProxyCmp({
  inputs: ['activated', 'edge', 'horizontal', 'vertical'],
  methods: ['close']
})
@Component({
  selector: 'ion-fab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activated', 'edge', 'horizontal', 'vertical'],
})
export class IonFab {
  protected el: HTMLIonFabElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonFab extends Components.IonFab {}


@ProxyCmp({
  inputs: ['activated', 'closeIcon', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'show', 'size', 'target', 'translucent', 'type']
})
@Component({
  selector: 'ion-fab-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activated', 'closeIcon', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'show', 'size', 'target', 'translucent', 'type'],
})
export class IonFabButton {
  protected el: HTMLIonFabButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}


export declare interface IonFabButton extends Components.IonFabButton {
  /**
   * Emitted when the button has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['activated', 'side']
})
@Component({
  selector: 'ion-fab-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activated', 'side'],
})
export class IonFabList {
  protected el: HTMLIonFabListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonFabList extends Components.IonFabList {}


@ProxyCmp({
  inputs: ['collapse', 'mode', 'translucent']
})
@Component({
  selector: 'ion-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapse', 'mode', 'translucent'],
})
export class IonFooter {
  protected el: HTMLIonFooterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonFooter extends Components.IonFooter {}


@ProxyCmp({
  inputs: ['fixed']
})
@Component({
  selector: 'ion-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['fixed'],
})
export class IonGrid {
  protected el: HTMLIonGridElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonGrid extends Components.IonGrid {}


@ProxyCmp({
  inputs: ['collapse', 'mode', 'translucent']
})
@Component({
  selector: 'ion-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapse', 'mode', 'translucent'],
})
export class IonHeader {
  protected el: HTMLIonHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonHeader extends Components.IonHeader {}


@ProxyCmp({
  inputs: ['color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src']
})
@Component({
  selector: 'ion-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src'],
})
export class IonIcon {
  protected el: HTMLIonIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonIcon extends Components.IonIcon {}


@ProxyCmp({
  inputs: ['alt', 'src']
})
@Component({
  selector: 'ion-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'src'],
})
export class IonImg {
  protected el: HTMLIonImgElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionImgWillLoad', 'ionImgDidLoad', 'ionError']);
  }
}


export declare interface IonImg extends Components.IonImg {
  /**
   * Emitted when the img src has been set
   */
  ionImgWillLoad: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the image has finished loading
   */
  ionImgDidLoad: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the img fails to load
   */
  ionError: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['disabled', 'position', 'threshold'],
  methods: ['complete']
})
@Component({
  selector: 'ion-infinite-scroll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'position', 'threshold'],
})
export class IonInfiniteScroll {
  protected el: HTMLIonInfiniteScrollElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInfinite']);
  }
}


export declare interface IonInfiniteScroll extends Components.IonInfiniteScroll {
  /**
   * Emitted when the scroll reaches
the threshold distance. From within your infinite handler,
you must call the infinite scroll's `complete()` method when
your async operation has completed.
   */
  ionInfinite: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['loadingSpinner', 'loadingText']
})
@Component({
  selector: 'ion-infinite-scroll-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['loadingSpinner', 'loadingText'],
})
export class IonInfiniteScrollContent {
  protected el: HTMLIonInfiniteScrollContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonInfiniteScrollContent extends Components.IonInfiniteScrollContent {}


@ProxyCmp({
  inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearInputIcon', 'clearOnEdit', 'color', 'counter', 'counterFormatter', 'debounce', 'disabled', 'enterkeyhint', 'errorText', 'fill', 'helperText', 'inputmode', 'label', 'labelPlacement', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'shape', 'spellcheck', 'step', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'ion-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearInputIcon', 'clearOnEdit', 'color', 'counter', 'counterFormatter', 'debounce', 'disabled', 'enterkeyhint', 'errorText', 'fill', 'helperText', 'inputmode', 'label', 'labelPlacement', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'shape', 'spellcheck', 'step', 'type', 'value'],
})
export class IonInput {
  protected el: HTMLIonInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionBlur', 'ionFocus']);
  }
}


import type { InputInputEventDetail as IIonInputInputInputEventDetail } from '@ionic/core';
import type { InputChangeEventDetail as IIonInputInputChangeEventDetail } from '@ionic/core';

export declare interface IonInput extends Components.IonInput {
  /**
   * The `ionInput` event is fired each time the user modifies the input's value.
Unlike the `ionChange` event, the `ionInput` event is fired for each alteration
to the input's value. This typically happens for each keystroke as the user types.

For elements that accept text input (`type=text`, `type=tel`, etc.), the interface
is [`InputEvent`](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent); for others,
the interface is [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event). If
the input is cleared on edit, the type is `null`.
   */
  ionInput: EventEmitter<CustomEvent<IIonInputInputInputEventDetail>>;
  /**
   * The `ionChange` event is fired when the user modifies the input's value.
Unlike the `ionInput` event, the `ionChange` event is only fired when changes
are committed, not as the user types.

Depending on the way the users interacts with the element, the `ionChange`
event fires at a different moment:
- When the user commits the change explicitly (e.g. by selecting a date
from a date picker for `<ion-input type="date">`, pressing the "Enter" key, etc.).
- When the element loses focus after its value has changed: for elements
where the user's interaction is typing.

This event will not emit when programmatically setting the `value` property.
   */
  ionChange: EventEmitter<CustomEvent<IIonInputInputChangeEventDetail>>;
  /**
   * Emitted when the input loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has focus.
   */
  ionFocus: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
  inputs: ['autocapitalize', 'color', 'disabled', 'fill', 'inputmode', 'length', 'pattern', 'readonly', 'separators', 'shape', 'size', 'type', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'ion-input-otp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocapitalize', 'color', 'disabled', 'fill', 'inputmode', 'length', 'pattern', 'readonly', 'separators', 'shape', 'size', 'type', 'value'],
})
export class IonInputOtp {
  protected el: HTMLIonInputOtpElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionComplete', 'ionBlur', 'ionFocus']);
  }
}


import type { InputOtpInputEventDetail as IIonInputOtpInputOtpInputEventDetail } from '@ionic/core';
import type { InputOtpChangeEventDetail as IIonInputOtpInputOtpChangeEventDetail } from '@ionic/core';
import type { InputOtpCompleteEventDetail as IIonInputOtpInputOtpCompleteEventDetail } from '@ionic/core';

export declare interface IonInputOtp extends Components.IonInputOtp {
  /**
   * The `ionInput` event is fired each time the user modifies the input's value.
Unlike the `ionChange` event, the `ionInput` event is fired for each alteration
to the input's value. This typically happens for each keystroke as the user types.

For elements that accept text input (`type=text`, `type=tel`, etc.), the interface
is [`InputEvent`](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent); for others,
the interface is [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event). If
the input is cleared on edit, the type is `null`.
   */
  ionInput: EventEmitter<CustomEvent<IIonInputOtpInputOtpInputEventDetail>>;
  /**
   * The `ionChange` event is fired when the user modifies the input's value.
Unlike the `ionInput` event, the `ionChange` event is only fired when changes
are committed, not as the user types.

The `ionChange` event fires when the `<ion-input-otp>` component loses
focus after its value has changed.

This event will not emit when programmatically setting the `value` property.
   */
  ionChange: EventEmitter<CustomEvent<IIonInputOtpInputOtpChangeEventDetail>>;
  /**
   * Emitted when all input boxes have been filled with valid values.
   */
  ionComplete: EventEmitter<CustomEvent<IIonInputOtpInputOtpCompleteEventDetail>>;
  /**
   * Emitted when the input group loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the input group has focus.
   */
  ionFocus: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
  inputs: ['color', 'hideIcon', 'mode', 'showIcon']
})
@Component({
  selector: 'ion-input-password-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'hideIcon', 'mode', 'showIcon'],
})
export class IonInputPasswordToggle {
  protected el: HTMLIonInputPasswordToggleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonInputPasswordToggle extends Components.IonInputPasswordToggle {}


@ProxyCmp({
  inputs: ['button', 'color', 'detail', 'detailIcon', 'disabled', 'download', 'href', 'lines', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type']
})
@Component({
  selector: 'ion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['button', 'color', 'detail', 'detailIcon', 'disabled', 'download', 'href', 'lines', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type'],
})
export class IonItem {
  protected el: HTMLIonItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItem extends Components.IonItem {}


@ProxyCmp({
  inputs: ['color', 'mode', 'sticky']
})
@Component({
  selector: 'ion-item-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'mode', 'sticky'],
})
export class IonItemDivider {
  protected el: HTMLIonItemDividerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItemDivider extends Components.IonItemDivider {}


@ProxyCmp({
})
@Component({
  selector: 'ion-item-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonItemGroup {
  protected el: HTMLIonItemGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItemGroup extends Components.IonItemGroup {}


@ProxyCmp({
  inputs: ['color', 'disabled', 'download', 'expandable', 'href', 'mode', 'rel', 'target', 'type']
})
@Component({
  selector: 'ion-item-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'download', 'expandable', 'href', 'mode', 'rel', 'target', 'type'],
})
export class IonItemOption {
  protected el: HTMLIonItemOptionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItemOption extends Components.IonItemOption {}


@ProxyCmp({
  inputs: ['side']
})
@Component({
  selector: 'ion-item-options',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['side'],
})
export class IonItemOptions {
  protected el: HTMLIonItemOptionsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSwipe']);
  }
}


export declare interface IonItemOptions extends Components.IonItemOptions {
  /**
   * Emitted when the item has been fully swiped.
   */
  ionSwipe: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['disabled'],
  methods: ['getOpenAmount', 'getSlidingRatio', 'open', 'close', 'closeOpened']
})
@Component({
  selector: 'ion-item-sliding',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
})
export class IonItemSliding {
  protected el: HTMLIonItemSlidingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionDrag']);
  }
}


export declare interface IonItemSliding extends Components.IonItemSliding {
  /**
   * Emitted when the sliding position changes.
   */
  ionDrag: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['color', 'mode', 'position']
})
@Component({
  selector: 'ion-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'mode', 'position'],
})
export class IonLabel {
  protected el: HTMLIonLabelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonLabel extends Components.IonLabel {}


@ProxyCmp({
  inputs: ['inset', 'lines', 'mode'],
  methods: ['closeSlidingItems']
})
@Component({
  selector: 'ion-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['inset', 'lines', 'mode'],
})
export class IonList {
  protected el: HTMLIonListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonList extends Components.IonList {}


@ProxyCmp({
  inputs: ['color', 'lines', 'mode']
})
@Component({
  selector: 'ion-list-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'lines', 'mode'],
})
export class IonListHeader {
  protected el: HTMLIonListHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonListHeader extends Components.IonListHeader {}


@ProxyCmp({
  inputs: ['animated', 'backdropDismiss', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'message', 'mode', 'showBackdrop', 'spinner', 'translucent', 'trigger'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'backdropDismiss', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'message', 'mode', 'showBackdrop', 'spinner', 'translucent', 'trigger'],
})
export class IonLoading {
  protected el: HTMLIonLoadingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionLoadingDidPresent', 'ionLoadingWillPresent', 'ionLoadingWillDismiss', 'ionLoadingDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
  }
}


import type { OverlayEventDetail as IIonLoadingOverlayEventDetail } from '@ionic/core';

export declare interface IonLoading extends Components.IonLoading {
  /**
   * Emitted after the loading has presented.
   */
  ionLoadingDidPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the loading has presented.
   */
  ionLoadingWillPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the loading has dismissed.
   */
  ionLoadingWillDismiss: EventEmitter<CustomEvent<IIonLoadingOverlayEventDetail>>;
  /**
   * Emitted after the loading has dismissed.
   */
  ionLoadingDidDismiss: EventEmitter<CustomEvent<IIonLoadingOverlayEventDetail>>;
  /**
   * Emitted after the loading indicator has presented.
Shorthand for ionLoadingWillDismiss.
   */
  didPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the loading indicator has presented.
Shorthand for ionLoadingWillPresent.
   */
  willPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the loading indicator has dismissed.
Shorthand for ionLoadingWillDismiss.
   */
  willDismiss: EventEmitter<CustomEvent<IIonLoadingOverlayEventDetail>>;
  /**
   * Emitted after the loading indicator has dismissed.
Shorthand for ionLoadingDidDismiss.
   */
  didDismiss: EventEmitter<CustomEvent<IIonLoadingOverlayEventDetail>>;
}


@ProxyCmp({
  inputs: ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type'],
  methods: ['isOpen', 'isActive', 'open', 'close', 'toggle', 'setOpen']
})
@Component({
  selector: 'ion-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type'],
})
export class IonMenu {
  protected el: HTMLIonMenuElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionWillOpen', 'ionWillClose', 'ionDidOpen', 'ionDidClose']);
  }
}


import type { MenuCloseEventDetail as IIonMenuMenuCloseEventDetail } from '@ionic/core';

export declare interface IonMenu extends Components.IonMenu {
  /**
   * Emitted when the menu is about to be opened.
   */
  ionWillOpen: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the menu is about to be closed.
   */
  ionWillClose: EventEmitter<CustomEvent<IIonMenuMenuCloseEventDetail>>;
  /**
   * Emitted when the menu is open.
   */
  ionDidOpen: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the menu is closed.
   */
  ionDidClose: EventEmitter<CustomEvent<IIonMenuMenuCloseEventDetail>>;
}


@ProxyCmp({
  inputs: ['autoHide', 'color', 'disabled', 'menu', 'mode', 'type']
})
@Component({
  selector: 'ion-menu-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoHide', 'color', 'disabled', 'menu', 'mode', 'type'],
})
export class IonMenuButton {
  protected el: HTMLIonMenuButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonMenuButton extends Components.IonMenuButton {}


@ProxyCmp({
  inputs: ['autoHide', 'menu']
})
@Component({
  selector: 'ion-menu-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoHide', 'menu'],
})
export class IonMenuToggle {
  protected el: HTMLIonMenuToggleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonMenuToggle extends Components.IonMenuToggle {}


@ProxyCmp({
  inputs: ['component', 'componentProps', 'routerAnimation', 'routerDirection']
})
@Component({
  selector: 'ion-nav-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['component', 'componentProps', 'routerAnimation', 'routerDirection'],
})
export class IonNavLink {
  protected el: HTMLIonNavLinkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonNavLink extends Components.IonNavLink {}


@ProxyCmp({
  inputs: ['color', 'mode']
})
@Component({
  selector: 'ion-note',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'mode'],
})
export class IonNote {
  protected el: HTMLIonNoteElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonNote extends Components.IonNote {}


@ProxyCmp({
  inputs: ['mode']
})
@Component({
  selector: 'ion-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['mode'],
})
export class IonPicker {
  protected el: HTMLIonPickerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonPicker extends Components.IonPicker {}


@ProxyCmp({
  inputs: ['color', 'disabled', 'mode', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'ion-picker-column',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'mode', 'value'],
})
export class IonPickerColumn {
  protected el: HTMLIonPickerColumnElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}


import type { PickerColumnChangeEventDetail as IIonPickerColumnPickerColumnChangeEventDetail } from '@ionic/core';

export declare interface IonPickerColumn extends Components.IonPickerColumn {
  /**
   * Emitted when the value has changed.

This event will not emit when programmatically setting the `value` property.
   */
  ionChange: EventEmitter<CustomEvent<IIonPickerColumnPickerColumnChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['color', 'disabled', 'value']
})
@Component({
  selector: 'ion-picker-column-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'value'],
})
export class IonPickerColumnOption {
  protected el: HTMLIonPickerColumnOptionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonPickerColumnOption extends Components.IonPickerColumnOption {}


@ProxyCmp({
  inputs: ['animated', 'backdropDismiss', 'buttons', 'columns', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'mode', 'showBackdrop', 'trigger'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss', 'getColumn']
})
@Component({
  selector: 'ion-picker-legacy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'backdropDismiss', 'buttons', 'columns', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'mode', 'showBackdrop', 'trigger'],
})
export class IonPickerLegacy {
  protected el: HTMLIonPickerLegacyElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionPickerDidPresent', 'ionPickerWillPresent', 'ionPickerWillDismiss', 'ionPickerDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
  }
}


import type { OverlayEventDetail as IIonPickerLegacyOverlayEventDetail } from '@ionic/core';

export declare interface IonPickerLegacy extends Components.IonPickerLegacy {
  /**
   * Emitted after the picker has presented.
   */
  ionPickerDidPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the picker has presented.
   */
  ionPickerWillPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the picker has dismissed.
   */
  ionPickerWillDismiss: EventEmitter<CustomEvent<IIonPickerLegacyOverlayEventDetail>>;
  /**
   * Emitted after the picker has dismissed.
   */
  ionPickerDidDismiss: EventEmitter<CustomEvent<IIonPickerLegacyOverlayEventDetail>>;
  /**
   * Emitted after the picker has presented.
Shorthand for ionPickerWillDismiss.
   */
  didPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the picker has presented.
Shorthand for ionPickerWillPresent.
   */
  willPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the picker has dismissed.
Shorthand for ionPickerWillDismiss.
   */
  willDismiss: EventEmitter<CustomEvent<IIonPickerLegacyOverlayEventDetail>>;
  /**
   * Emitted after the picker has dismissed.
Shorthand for ionPickerDidDismiss.
   */
  didDismiss: EventEmitter<CustomEvent<IIonPickerLegacyOverlayEventDetail>>;
}


@ProxyCmp({
  inputs: ['buffer', 'color', 'mode', 'reversed', 'type', 'value']
})
@Component({
  selector: 'ion-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['buffer', 'color', 'mode', 'reversed', 'type', 'value'],
})
export class IonProgressBar {
  protected el: HTMLIonProgressBarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonProgressBar extends Components.IonProgressBar {}


@ProxyCmp({
  inputs: ['alignment', 'color', 'disabled', 'justify', 'labelPlacement', 'mode', 'name', 'value']
})
@Component({
  selector: 'ion-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'color', 'disabled', 'justify', 'labelPlacement', 'mode', 'name', 'value'],
})
export class IonRadio {
  protected el: HTMLIonRadioElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}


export declare interface IonRadio extends Components.IonRadio {
  /**
   * Emitted when the radio button has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the radio button loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['allowEmptySelection', 'compareWith', 'errorText', 'helperText', 'name', 'value']
})
@Component({
  selector: 'ion-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowEmptySelection', 'compareWith', 'errorText', 'helperText', 'name', 'value'],
})
export class IonRadioGroup {
  protected el: HTMLIonRadioGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}


import type { RadioGroupChangeEventDetail as IIonRadioGroupRadioGroupChangeEventDetail } from '@ionic/core';

export declare interface IonRadioGroup extends Components.IonRadioGroup {
  /**
   * Emitted when the value has changed.

This event will not emit when programmatically setting the `value` property.
   */
  ionChange: EventEmitter<CustomEvent<IIonRadioGroupRadioGroupChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['activeBarStart', 'color', 'debounce', 'disabled', 'dualKnobs', 'label', 'labelPlacement', 'max', 'min', 'mode', 'name', 'pin', 'pinFormatter', 'snaps', 'step', 'ticks', 'value']
})
@Component({
  selector: 'ion-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeBarStart', 'color', 'debounce', 'disabled', 'dualKnobs', 'label', 'labelPlacement', 'max', 'min', 'mode', 'name', 'pin', 'pinFormatter', 'snaps', 'step', 'ticks', 'value'],
})
export class IonRange {
  protected el: HTMLIonRangeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionInput', 'ionFocus', 'ionBlur', 'ionKnobMoveStart', 'ionKnobMoveEnd']);
  }
}


import type { RangeChangeEventDetail as IIonRangeRangeChangeEventDetail } from '@ionic/core';
import type { RangeKnobMoveStartEventDetail as IIonRangeRangeKnobMoveStartEventDetail } from '@ionic/core';
import type { RangeKnobMoveEndEventDetail as IIonRangeRangeKnobMoveEndEventDetail } from '@ionic/core';

export declare interface IonRange extends Components.IonRange {
  /**
   * The `ionChange` event is fired for `<ion-range>` elements when the user
modifies the element's value:
- When the user releases the knob after dragging;
- When the user moves the knob with keyboard arrows

This event will not emit when programmatically setting the `value` property.
   */
  ionChange: EventEmitter<CustomEvent<IIonRangeRangeChangeEventDetail>>;
  /**
   * The `ionInput` event is fired for `<ion-range>` elements when the value
is modified. Unlike `ionChange`, `ionInput` is fired continuously
while the user is dragging the knob.
   */
  ionInput: EventEmitter<CustomEvent<IIonRangeRangeChangeEventDetail>>;
  /**
   * Emitted when the range has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the range loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the user starts moving the range knob, whether through
mouse drag, touch gesture, or keyboard interaction.
   */
  ionKnobMoveStart: EventEmitter<CustomEvent<IIonRangeRangeKnobMoveStartEventDetail>>;
  /**
   * Emitted when the user finishes moving the range knob, whether through
mouse drag, touch gesture, or keyboard interaction.
   */
  ionKnobMoveEnd: EventEmitter<CustomEvent<IIonRangeRangeKnobMoveEndEventDetail>>;
}


@ProxyCmp({
  inputs: ['closeDuration', 'disabled', 'mode', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration'],
  methods: ['complete', 'cancel', 'getProgress']
})
@Component({
  selector: 'ion-refresher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeDuration', 'disabled', 'mode', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration'],
})
export class IonRefresher {
  protected el: HTMLIonRefresherElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionRefresh', 'ionPull', 'ionStart']);
  }
}


import type { RefresherEventDetail as IIonRefresherRefresherEventDetail } from '@ionic/core';

export declare interface IonRefresher extends Components.IonRefresher {
  /**
   * Emitted when the user lets go of the content and has pulled down
further than the `pullMin` or pulls the content down and exceeds the pullMax.
Updates the refresher state to `refreshing`. The `complete()` method should be
called when the async operation has completed.
   */
  ionRefresh: EventEmitter<CustomEvent<IIonRefresherRefresherEventDetail>>;
  /**
   * Emitted while the user is pulling down the content and exposing the refresher.
   */
  ionPull: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the user begins to start pulling down.
   */
  ionStart: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText']
})
@Component({
  selector: 'ion-refresher-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText'],
})
export class IonRefresherContent {
  protected el: HTMLIonRefresherContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonRefresherContent extends Components.IonRefresherContent {}


@ProxyCmp({
})
@Component({
  selector: 'ion-reorder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonReorder {
  protected el: HTMLIonReorderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonReorder extends Components.IonReorder {}


@ProxyCmp({
  inputs: ['disabled'],
  methods: ['complete']
})
@Component({
  selector: 'ion-reorder-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
})
export class IonReorderGroup {
  protected el: HTMLIonReorderGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionItemReorder', 'ionReorderStart', 'ionReorderMove', 'ionReorderEnd']);
  }
}


import type { ItemReorderEventDetail as IIonReorderGroupItemReorderEventDetail } from '@ionic/core';
import type { ReorderMoveEventDetail as IIonReorderGroupReorderMoveEventDetail } from '@ionic/core';
import type { ReorderEndEventDetail as IIonReorderGroupReorderEndEventDetail } from '@ionic/core';

export declare interface IonReorderGroup extends Components.IonReorderGroup {
  /**
   * Event that needs to be listened to in order to complete the reorder action. @deprecated Use `ionReorderEnd` instead. If you are accessing
`event.detail.from` or `event.detail.to` and relying on them
being different you should now add checks as they are always emitted
in `ionReorderEnd`, even when they are the same.
   */
  ionItemReorder: EventEmitter<CustomEvent<IIonReorderGroupItemReorderEventDetail>>;
  /**
   * Event that is emitted when the reorder gesture starts.
   */
  ionReorderStart: EventEmitter<CustomEvent<void>>;
  /**
   * Event that is emitted as the reorder gesture moves.
   */
  ionReorderMove: EventEmitter<CustomEvent<IIonReorderGroupReorderMoveEventDetail>>;
  /**
   * Event that is emitted when the reorder gesture ends.
The from and to properties are always available, regardless of
if the reorder gesture moved the item. If the item did not change
from its start position, the from and to properties will be the same.
Once the event has been emitted, the `complete()` method then needs
to be called in order to finalize the reorder action.
   */
  ionReorderEnd: EventEmitter<CustomEvent<IIonReorderGroupReorderEndEventDetail>>;
}


@ProxyCmp({
  inputs: ['type'],
  methods: ['addRipple']
})
@Component({
  selector: 'ion-ripple-effect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['type'],
})
export class IonRippleEffect {
  protected el: HTMLIonRippleEffectElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonRippleEffect extends Components.IonRippleEffect {}


@ProxyCmp({
})
@Component({
  selector: 'ion-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonRow {
  protected el: HTMLIonRowElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonRow extends Components.IonRow {}


@ProxyCmp({
  inputs: ['animated', 'autocapitalize', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'spellcheck', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'ion-searchbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'autocapitalize', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'spellcheck', 'type', 'value'],
})
export class IonSearchbar {
  protected el: HTMLIonSearchbarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionCancel', 'ionClear', 'ionBlur', 'ionFocus']);
  }
}


import type { SearchbarInputEventDetail as IIonSearchbarSearchbarInputEventDetail } from '@ionic/core';
import type { SearchbarChangeEventDetail as IIonSearchbarSearchbarChangeEventDetail } from '@ionic/core';

export declare interface IonSearchbar extends Components.IonSearchbar {
  /**
   * Emitted when the `value` of the `ion-searchbar` element has changed.
   */
  ionInput: EventEmitter<CustomEvent<IIonSearchbarSearchbarInputEventDetail>>;
  /**
   * The `ionChange` event is fired for `<ion-searchbar>` elements when the user
modifies the element's value. Unlike the `ionInput` event, the `ionChange`
event is not necessarily fired for each alteration to an element's value.

The `ionChange` event is fired when the value has been committed
by the user. This can happen when the element loses focus or
when the "Enter" key is pressed. `ionChange` can also fire
when clicking the clear or cancel buttons.

This event will not emit when programmatically setting the `value` property.
   */
  ionChange: EventEmitter<CustomEvent<IIonSearchbarSearchbarChangeEventDetail>>;
  /**
   * Emitted when the cancel button is clicked.
   */
  ionCancel: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the clear input button is clicked.
   */
  ionClear: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color', 'disabled', 'mode', 'scrollable', 'selectOnFocus', 'swipeGesture', 'value']
})
@Component({
  selector: 'ion-segment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'mode', 'scrollable', 'selectOnFocus', 'swipeGesture', 'value'],
})
export class IonSegment {
  protected el: HTMLIonSegmentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}


import type { SegmentChangeEventDetail as IIonSegmentSegmentChangeEventDetail } from '@ionic/core';

export declare interface IonSegment extends Components.IonSegment {
  /**
   * Emitted when the value property has changed and any dragging pointer has been released from `ion-segment`.

This event will not emit when programmatically setting the `value` property.
   */
  ionChange: EventEmitter<CustomEvent<IIonSegmentSegmentChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['contentId', 'disabled', 'layout', 'mode', 'type', 'value']
})
@Component({
  selector: 'ion-segment-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['contentId', 'disabled', 'layout', 'mode', 'type', 'value'],
})
export class IonSegmentButton {
  protected el: HTMLIonSegmentButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSegmentButton extends Components.IonSegmentButton {}


@ProxyCmp({
})
@Component({
  selector: 'ion-segment-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonSegmentContent {
  protected el: HTMLIonSegmentContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSegmentContent extends Components.IonSegmentContent {}


@ProxyCmp({
  inputs: ['disabled']
})
@Component({
  selector: 'ion-segment-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
})
export class IonSegmentView {
  protected el: HTMLIonSegmentViewElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSegmentViewScroll']);
  }
}


import type { SegmentViewScrollEvent as IIonSegmentViewSegmentViewScrollEvent } from '@ionic/core';

export declare interface IonSegmentView extends Components.IonSegmentView {
  /**
   * Emitted when the segment view is scrolled.
   */
  ionSegmentViewScroll: EventEmitter<CustomEvent<IIonSegmentViewSegmentViewScrollEvent>>;
}


@ProxyCmp({
  inputs: ['cancelText', 'color', 'compareWith', 'disabled', 'errorText', 'expandedIcon', 'fill', 'helperText', 'interface', 'interfaceOptions', 'justify', 'label', 'labelPlacement', 'mode', 'multiple', 'name', 'okText', 'placeholder', 'required', 'selectedText', 'shape', 'toggleIcon', 'value'],
  methods: ['open']
})
@Component({
  selector: 'ion-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['cancelText', 'color', 'compareWith', 'disabled', 'errorText', 'expandedIcon', 'fill', 'helperText', 'interface', 'interfaceOptions', 'justify', 'label', 'labelPlacement', 'mode', 'multiple', 'name', 'okText', 'placeholder', 'required', 'selectedText', 'shape', 'toggleIcon', 'value'],
})
export class IonSelect {
  protected el: HTMLIonSelectElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionCancel', 'ionDismiss', 'ionFocus', 'ionBlur']);
  }
}


import type { SelectChangeEventDetail as IIonSelectSelectChangeEventDetail } from '@ionic/core';

export declare interface IonSelect extends Components.IonSelect {
  /**
   * Emitted when the value has changed.

This event will not emit when programmatically setting the `value` property.
   */
  ionChange: EventEmitter<CustomEvent<IIonSelectSelectChangeEventDetail>>;
  /**
   * Emitted when the selection is cancelled.
   */
  ionCancel: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the overlay is dismissed.
   */
  ionDismiss: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the select has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the select loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['header', 'multiple', 'options']
})
@Component({
  selector: 'ion-select-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['header', 'multiple', 'options'],
})
export class IonSelectModal {
  protected el: HTMLIonSelectModalElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSelectModal extends Components.IonSelectModal {}


@ProxyCmp({
  inputs: ['disabled', 'value']
})
@Component({
  selector: 'ion-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'value'],
})
export class IonSelectOption {
  protected el: HTMLIonSelectOptionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSelectOption extends Components.IonSelectOption {}


@ProxyCmp({
  inputs: ['animated']
})
@Component({
  selector: 'ion-skeleton-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated'],
})
export class IonSkeletonText {
  protected el: HTMLIonSkeletonTextElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSkeletonText extends Components.IonSkeletonText {}


@ProxyCmp({
  inputs: ['color', 'duration', 'name', 'paused']
})
@Component({
  selector: 'ion-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'duration', 'name', 'paused'],
})
export class IonSpinner {
  protected el: HTMLIonSpinnerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSpinner extends Components.IonSpinner {}


@ProxyCmp({
  inputs: ['contentId', 'disabled', 'when']
})
@Component({
  selector: 'ion-split-pane',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['contentId', 'disabled', 'when'],
})
export class IonSplitPane {
  protected el: HTMLIonSplitPaneElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSplitPaneVisible']);
  }
}


export declare interface IonSplitPane extends Components.IonSplitPane {
  /**
   * Expression to be called when the split-pane visibility has changed
   */
  ionSplitPaneVisible: EventEmitter<CustomEvent<{ visible: boolean }>>;
}


@ProxyCmp({
  inputs: ['component', 'tab'],
  methods: ['setActive']
})
@Component({
  selector: 'ion-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['component', 'tab'],
})
export class IonTab {
  protected el: HTMLIonTabElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonTab extends Components.IonTab {}


@ProxyCmp({
  inputs: ['color', 'mode', 'selectedTab', 'translucent']
})
@Component({
  selector: 'ion-tab-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'mode', 'selectedTab', 'translucent'],
})
export class IonTabBar {
  protected el: HTMLIonTabBarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonTabBar extends Components.IonTabBar {}


@ProxyCmp({
  inputs: ['disabled', 'download', 'href', 'layout', 'mode', 'rel', 'selected', 'tab', 'target']
})
@Component({
  selector: 'ion-tab-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'download', 'href', 'layout', 'mode', 'rel', 'selected', 'tab', 'target'],
})
export class IonTabButton {
  protected el: HTMLIonTabButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonTabButton extends Components.IonTabButton {}


@ProxyCmp({
  inputs: ['color', 'mode']
})
@Component({
  selector: 'ion-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'mode'],
})
export class IonText {
  protected el: HTMLIonTextElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonText extends Components.IonText {}


@ProxyCmp({
  inputs: ['autoGrow', 'autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'counter', 'counterFormatter', 'debounce', 'disabled', 'enterkeyhint', 'errorText', 'fill', 'helperText', 'inputmode', 'label', 'labelPlacement', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'readonly', 'required', 'rows', 'shape', 'spellcheck', 'value', 'wrap'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'ion-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoGrow', 'autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'counter', 'counterFormatter', 'debounce', 'disabled', 'enterkeyhint', 'errorText', 'fill', 'helperText', 'inputmode', 'label', 'labelPlacement', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'readonly', 'required', 'rows', 'shape', 'spellcheck', 'value', 'wrap'],
})
export class IonTextarea {
  protected el: HTMLIonTextareaElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionInput', 'ionBlur', 'ionFocus']);
  }
}


import type { TextareaChangeEventDetail as IIonTextareaTextareaChangeEventDetail } from '@ionic/core';
import type { TextareaInputEventDetail as IIonTextareaTextareaInputEventDetail } from '@ionic/core';

export declare interface IonTextarea extends Components.IonTextarea {
  /**
   * The `ionChange` event is fired when the user modifies the textarea's value.
Unlike the `ionInput` event, the `ionChange` event is fired when
the element loses focus after its value has been modified.

This event will not emit when programmatically setting the `value` property.
   */
  ionChange: EventEmitter<CustomEvent<IIonTextareaTextareaChangeEventDetail>>;
  /**
   * The `ionInput` event is fired each time the user modifies the textarea's value.
Unlike the `ionChange` event, the `ionInput` event is fired for each alteration
to the textarea's value. This typically happens for each keystroke as the user types.

When `clearOnEdit` is enabled, the `ionInput` event will be fired when
the user clears the textarea by performing a keydown event.
   */
  ionInput: EventEmitter<CustomEvent<IIonTextareaTextareaInputEventDetail>>;
  /**
   * Emitted when the input loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has focus.
   */
  ionFocus: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ion-thumbnail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonThumbnail {
  protected el: HTMLIonThumbnailElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonThumbnail extends Components.IonThumbnail {}


@ProxyCmp({
  inputs: ['color', 'size']
})
@Component({
  selector: 'ion-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'size'],
})
export class IonTitle {
  protected el: HTMLIonTitleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonTitle extends Components.IonTitle {}


@ProxyCmp({
  inputs: ['animated', 'buttons', 'color', 'cssClass', 'duration', 'enterAnimation', 'header', 'htmlAttributes', 'icon', 'isOpen', 'keyboardClose', 'layout', 'leaveAnimation', 'message', 'mode', 'position', 'positionAnchor', 'swipeGesture', 'translucent', 'trigger'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'buttons', 'color', 'cssClass', 'duration', 'enterAnimation', 'header', 'htmlAttributes', 'icon', 'isOpen', 'keyboardClose', 'layout', 'leaveAnimation', 'message', 'mode', 'position', 'positionAnchor', 'swipeGesture', 'translucent', 'trigger'],
})
export class IonToast {
  protected el: HTMLIonToastElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionToastDidPresent', 'ionToastWillPresent', 'ionToastWillDismiss', 'ionToastDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
  }
}


import type { OverlayEventDetail as IIonToastOverlayEventDetail } from '@ionic/core';

export declare interface IonToast extends Components.IonToast {
  /**
   * Emitted after the toast has presented.
   */
  ionToastDidPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the toast has presented.
   */
  ionToastWillPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the toast has dismissed.
   */
  ionToastWillDismiss: EventEmitter<CustomEvent<IIonToastOverlayEventDetail>>;
  /**
   * Emitted after the toast has dismissed.
   */
  ionToastDidDismiss: EventEmitter<CustomEvent<IIonToastOverlayEventDetail>>;
  /**
   * Emitted after the toast has presented.
Shorthand for ionToastWillDismiss.
   */
  didPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the toast has presented.
Shorthand for ionToastWillPresent.
   */
  willPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the toast has dismissed.
Shorthand for ionToastWillDismiss.
   */
  willDismiss: EventEmitter<CustomEvent<IIonToastOverlayEventDetail>>;
  /**
   * Emitted after the toast has dismissed.
Shorthand for ionToastDidDismiss.
   */
  didDismiss: EventEmitter<CustomEvent<IIonToastOverlayEventDetail>>;
}


@ProxyCmp({
  inputs: ['alignment', 'checked', 'color', 'disabled', 'enableOnOffLabels', 'errorText', 'helperText', 'justify', 'labelPlacement', 'mode', 'name', 'required', 'value']
})
@Component({
  selector: 'ion-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'checked', 'color', 'disabled', 'enableOnOffLabels', 'errorText', 'helperText', 'justify', 'labelPlacement', 'mode', 'name', 'required', 'value'],
})
export class IonToggle {
  protected el: HTMLIonToggleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
  }
}


import type { ToggleChangeEventDetail as IIonToggleToggleChangeEventDetail } from '@ionic/core';

export declare interface IonToggle extends Components.IonToggle {
  /**
   * Emitted when the user switches the toggle on or off.

This event will not emit when programmatically setting the `checked` property.
   */
  ionChange: EventEmitter<CustomEvent<IIonToggleToggleChangeEventDetail>>;
  /**
   * Emitted when the toggle has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the toggle loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color', 'mode']
})
@Component({
  selector: 'ion-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'mode'],
})
export class IonToolbar {
  protected el: HTMLIonToolbarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonToolbar extends Components.IonToolbar {}


