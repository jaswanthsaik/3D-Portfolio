import { Component } from '@angular/core';
import { textVariant, fadeIn } from '../animations/animations.component';
import { services } from '../animations/animations.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    textVariant('0s'),
    fadeIn('', '', '0.1s', '1s'), // Adjust the parameters as needed
  ],
})
export class AboutComponent {
  sectionSubText = 'sectionSubText';
  sectionHeadText = 'sectionHeadText';
  services = services;
  navigateToGitHub(title: string): void {
    if (title === 'React') {
      window.open('https://github.com/jaswanthsaik/React-Projects', '_blank');
    }
    else if (title === 'HTML CSS') {
      window.open('https://github.com/jaswanthsaik/HTML-CSS-SampleProjects', '_blank');
    }
    else if (title === 'Angular') {
      window.open('https://github.com/jaswanthsaik/Angular-curdoperations-DBjson', '_blank');
    }
    else if (title === 'Kalibr8') {
      window.open('https://github.com/jaswanthsaik/angular-login-UI', '_blank');
    }
  }

}
