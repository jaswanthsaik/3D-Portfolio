import { Component, Input } from '@angular/core';
import { fadeIn } from '../animations/animations.component';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css'],
  animations: [
    fadeIn('', '', '', ''),
  ],
})
export class ServiceCardComponent {
  @Input() index: number = 0;
  @Input() title: string = '';
  @Input() icon: string = '';

  fadeInAnimation = `${this.index * 0.5 + 0.75}s`;
  cardClasses = 'w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card';
  gradientClasses = 'bg-gradient';
}
