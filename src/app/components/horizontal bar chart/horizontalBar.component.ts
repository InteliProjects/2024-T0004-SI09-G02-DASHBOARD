import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiConnect } from '../../services/api.service';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './horizontalBar.component.html',
  styleUrls: ['./horizontalBar.component.css'],
  standalone: true,
  styles: []
})
export class MyBarChartComponent implements AfterViewInit {
  private chart: Chart | undefined;

  constructor(private apiConnect: ApiConnect) { }

  ngAfterViewInit(): void {
    Chart.register(...registerables);
    this.getDaysAppointment();
  }

  getDaysAppointment() {
    this.apiConnect.getDaysAppointment().subscribe((response: any) => {
      let jsonobj = response.body || [];
      let chartData: { [year: string]: { [day: string]: number } } = {};

      jsonobj.forEach((record: any) => {
        const { ano, diaSemana, numeroConsultas } = record;
        if (!chartData[ano]) chartData[ano] = {};
        if (!chartData[ano][diaSemana]) chartData[ano][diaSemana] = 0;
        chartData[ano][diaSemana] += numeroConsultas;
      });

      this.updateChart(chartData);
    });
  }

  updateChart(chartData: { [year: string]: { [day: string]: number } }) {
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const backgroundColors = {
      '2022': 'rgba(255, 99, 132, 0.2)',
      '2023': 'rgba(54, 162, 235, 0.2)',
    };
    const borderColors = {
      '2022': 'rgba(255, 99, 132, 1)',
      '2023': 'rgba(54, 162, 235, 1)',
    };

    const datasets = Object.keys(chartData).map(year => {
      const data = labels.map(day => chartData[year][day] || 0);
      return {
        label: year,
        data,
        backgroundColor: backgroundColors[year as keyof typeof backgroundColors],
        borderColor: borderColors[year as keyof typeof borderColors], 
        borderWidth: 1
      };
    });

    const ctx = document.getElementById('horizontal-bar') as HTMLCanvasElement;
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: { labels, datasets },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Número de consultas realizadas por dia da semana',
            font: { size: 16, family: 'Poppins', weight: 'bold' },
          }
        },
        scales: {
          x: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
