import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [],
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'] 
})
export class DashBoardComponent implements AfterViewInit { 

  ngAfterViewInit(): void {
    if(typeof localStorage !== 'undefined'){
      const ctxP1 = document.getElementById('pieChart') as HTMLCanvasElement;

      if (ctxP1) { 
        new Chart(ctxP1, {
          type: 'pie',
          data: {
            labels: ['GOLD', 'OTHER'],
            datasets: [{
              label: 'Number Of Medals',
              data: [2, 2, 2],
              backgroundColor: [
                'rgba(255, 206, 86, 0.5)',
                'rgba(30, 12, 25, 0.2)',
              ],
              borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(30, 12, 25, 0.8)',
              ],
              borderWidth: 1
            }]
          }
        });
      } else {
        console.error('Canvas element not found!');
      }
    } 

   
  }
}
