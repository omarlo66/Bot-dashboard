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
      const ctx = document.getElementById('barChart') as HTMLCanvasElement;

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'],
          datasets: [
            {
              label: 'Involuntary',
              data: [5, 10, 8, 4],
              backgroundColor: 'rgba(0, 200, 200, 0.5)',
              borderColor: 'rgba(0, 200, 200, 1)',
              borderWidth: 1,
            },
            {
              label: 'Voluntary',
              data: [3, 6, 7, 2],
              backgroundColor: 'rgba(0, 100, 200, 0.5)', 
              borderColor: 'rgba(0, 100, 200, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            },
          },
          scales: {
            x: {
              stacked: true, 
              ticks: {
                color: '#ffffff', 
              },
            },
            y: {
              stacked: true, 
              beginAtZero: true,
              ticks: {
                color: '#ffffff',
              },
            },
          },
        },
      });
      
      //////////////////////////////////////////////////////////////
      const ctx2 = document.getElementById('lineChart') as HTMLCanvasElement;

      new Chart(ctx2, {
        type: 'line',
        data: {
          labels: ['20-25', '25-30', '30-35', '35-40', '>40'], 
          datasets: [
            {
              label: 'Female',
              data: [50, 120, 90, 110, 150], 
              borderColor: 'rgba(0, 200, 200, 1)', 
              backgroundColor: 'rgba(0, 200, 200, 0.2)', 
              borderWidth: 2,
              pointRadius: 5,
              pointBackgroundColor: 'rgba(0, 200, 200, 1)', 
              fill: false,
            },
            {
              label: 'Male',
              data: [80, 60, 100, 90, 200], 
              borderColor: 'rgba(0, 100, 200, 1)', 
              backgroundColor: 'rgba(0, 100, 200, 0.2)', 
              borderWidth: 2,
              pointRadius: 5,
              pointBackgroundColor: 'rgba(0, 100, 200, 1)', 
              fill: false,
             
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top', 
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Age Groups',
                color: '#fff', 
              },
              ticks: {
                color: '#fff',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Terminations',
                color: '#fff', 
              },
              ticks: {
                color: '#fff', 
              },
            },
          },
        },
      });
      ///////////////////////////////////////////////////////////////////////////////
      const ctx3 = document.getElementById('lineChart2') as HTMLCanvasElement;

      new Chart(ctx3, {
        type: 'line',
        data: {
          labels: ['20-25', '25-30', '30-35', '35-40', '>40'], 
          datasets: [
            {
              label: 'Female',
              data: [50, 60, 120, 160, 50],
              borderColor: 'rgba(0, 200, 200, 1)', 
              backgroundColor: 'rgba(0, 200, 200, 0.2)',
              borderWidth: 2,
              pointRadius: 5,
              pointBackgroundColor: 'rgba(0, 200, 200, 1)',
              fill: false,
            },
            {
              label: 'Male',
              data: [120, 200, 70, 52, 125], 
              borderColor: 'rgba(0, 100, 200, 1)', 
              backgroundColor: 'rgba(0, 100, 200, 0.2)',
              pointRadius: 5,
              pointBackgroundColor: 'rgba(0, 100, 200, 1)',
              fill: false,
             
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top', 
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Age Groups',
                color: '#fff', 
              },
              ticks: {
                color: '#fff', 
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Terminations',
                color: '#fff',
              },
              ticks: {
                color: '#fff', 
              },
            },
          },
        },
      });

      /////////////////////////////////////////////////////////////////////////////
      const ctx4 = document.getElementById('horizontalBarChart') as HTMLCanvasElement;
      new Chart(ctx4, {
        type: 'bar', 
        data: {
          labels: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'], 
          datasets: [
            {
              label: 'Involuntary',
              data: [5, 10, 8, 4],
              backgroundColor: 'rgba(0, 200, 200, 0.5)',
              borderColor: 'rgba(0, 200, 200, 1)',
              borderWidth: 1,
            },
            {
              label: 'Voluntary',
              data: [3, 6, 7, 2],
              backgroundColor: 'rgba(0, 100, 200, 0.5)',
              borderColor: 'rgba(0, 100, 200, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          indexAxis: 'y', 
          plugins: {
            legend: {
              display: true,
              position: 'top', 
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            },
          },
          scales: {
            x: {
              beginAtZero: true, 
              ticks: {
                color: '#ffffff', 
              },
              title: {
                display: true,
                text: 'Number of Terminations',
                color: '#ffffff', 
              },
            },
            y: {
              stacked: true, 
              ticks: {
                color: '#ffffff', 
              },
            },
          },
        },
      });

      ////////////////////////////////////////////////////////////////////////////////
      const ctx5 = document.getElementById('verticalbarchart') as HTMLCanvasElement;
      new Chart(ctx5, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            backgroundColor: 'rgba(0, 200, 200, 1)',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {

              ticks: {
                color: '#ffffff', 
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#ffffff', 
              },
            }
          }
        }
      });

      ///////////////////////////////////////////////////////////////////////////////////
      const ctx6 = document.getElementById('verticalbarchart2') as HTMLCanvasElement;
      new Chart(ctx6, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            backgroundColor: 'rgba(0, 200, 200, 1)',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {

              ticks: {
                color: '#ffffff', 
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#ffffff', 
              },
            }
          }
        }
      });
      
      
      
      


    }
    } 

   
  }

