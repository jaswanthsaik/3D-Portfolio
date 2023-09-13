import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-balls',
  templateUrl: './rotating-balls.component.html',
  styleUrls: ['./rotating-balls.component.css']
})
export class RotatingBallsComponent implements OnInit {
  isPaused = false;
  ngOnInit() {
    let angle = 0;  
    const R = 200;
    const N = 10;
    const deltaTheta = 2 * Math.PI / N;

    setInterval(() => {
      if (!this.isPaused) { 
      angle += 0.01;
      }
      const balls = document.querySelectorAll('.ball');
      balls.forEach((ball: Element, index) => {
        const theta = deltaTheta * index + angle; 
        const x = R * Math.cos(theta);
        const y = R * Math.sin(theta);
        (ball as HTMLElement).style.transform = `translate3D(${x}px, ${y}px, 0)`;
      });
    }, 20);
  }
  onMouseEnter() {
    this.isPaused = true;
  }

  onMouseLeave() {
    this.isPaused = false;
  }
}
