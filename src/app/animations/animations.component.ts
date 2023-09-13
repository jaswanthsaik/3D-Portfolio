import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css']
})



export class AnimationsComponent {
 }

  export const textVariant = (delay: string) => {
    return trigger('textVariant', [
      transition('hidden => show', [
        style({ transform: 'translateY(-50%)', opacity: 0 }),
        animate('1.25s {{delay}}', style({ transform: 'translateY(0)', opacity: 1 })),
      ], { params: { delay } }),
    ]);
  };
  
  export const fadeIn = (direction: string, type: string, delay: string, duration: string) => {
    const xValue = direction === 'left' ? '100%' : direction === 'right' ? '-100%' : '0';
    const yValue = direction === 'up' ? '100%' : direction === 'down' ? '-100%' : '0';
  
    return trigger('fadeIn', [
      transition('hidden => show', [
        style({ transform: `translate(${xValue}, ${yValue})`, opacity: 0 }),
        animate('{{duration}} {{delay}} ease-out', style({ transform: 'translate(0, 0)', opacity: 1 })),
      ], { params: { delay, duration } }),
    ]);
  };
  
  export const zoomIn = (delay: string, duration: string) => {
    return trigger('zoomIn', [
      transition('hidden => show', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('{{duration}} {{delay}} ease-out', style({ transform: 'scale(1)', opacity: 1 })),
      ], { params: { delay, duration } }),
    ]);
  };
  
  export const slideIn = (direction: string, type: string, delay: string, duration: string) => {
    const xValue = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0';
    const yValue = direction === 'up' ? '-100%' : direction === 'down' ? '100%' : '0';
  
    return trigger('slideIn', [
      transition('hidden => show', [
        style({ transform: `translate(${xValue}, ${yValue})` }),
        animate('{{duration}} {{delay}} ease-out', style({ transform: 'translate(0, 0)' })),
      ], { params: { delay, duration } }),
    ]);
  };
  
  export const staggerContainer = (staggerChildren: string, delayChildren: string) => {
    return trigger('staggerContainer', [
      transition('hidden => show', [
        // No explicit animation for the container, only staggerChildren and delayChildren
      ], { params: { staggerChildren, delayChildren } }),
    ]);
  };
export const web = '../assets/web.png';
export const mobile = '../assets/mobile.png';
export const backend = '../assets/backend.png';
export const creator = '../assets/creator.png';

  export const services = [
    {
      title: "Kalibr8",
      icon: web,
    },
    {
      title: "Angular",
      icon: mobile,
    },
    {
      title: "React",
      icon: backend,
    },
    {
      title: "HTML CSS",
      icon: creator,
    },
  ];
  
