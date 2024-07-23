import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiConnect } from '../../services/api.service';

@Component({
  selector: 'app-doctor-appointment-chart',
  templateUrl: './doctor-appointment-chart.component.html',
  styleUrls: ['./doctor-appointment-chart.component.css'],
  standalone: true,
})
export class DoctorAppointmentChartComponent implements AfterViewInit {
  dataByYear: any = {};

  constructor(private apiConnect: ApiConnect) {}

  ngAfterViewInit(): void {
    this.getAppointmentsQuantity();
  }

  getAppointmentsQuantity() {
    this.apiConnect.getAppointmentsQuantity().subscribe((response: any) => {
      let jsonobj = response.body || [];
      jsonobj.forEach((item: any) => {
        const year = item.ano;
        const monthIndex = parseInt(item.mes) - 1;
        const numConsultas = item.numeroConsultas;

        if (!this.dataByYear[year]) {
          this.dataByYear[year] = Array(12).fill(0);
        }

        this.dataByYear[year][monthIndex] = numConsultas;
      });

      this.renderChart();
    });
  }

  renderChart(): void {
    const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const datasetColors: { [key: string]: { borderColor: string; backgroundColor: string } } = {
      '2020': { borderColor: '#D1D3D4', backgroundColor: 'rgba(209, 211, 230, 0.5)' },
      '2021': { borderColor: '#63666A', backgroundColor: 'rgba(99, 102, 106, 0.5)' },
      '2022': { borderColor: '#FFCC00', backgroundColor: 'rgba(255, 204, 0, 0.5)' },
      '2023': { borderColor: '#0057B8', backgroundColor: 'rgba(0, 87, 184, 0.5)' }
    };

    const datasets = Object.keys(this.dataByYear).map((year) => ({
        label: year,
        data: this.dataByYear[year],
        ...datasetColors[year]
    }));

    const ctx = (document.getElementById('doctor-appointment') as HTMLCanvasElement).getContext('2d');

    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets,
        },
        options: {
          responsive: true, 
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Número de consultas médicas por meses do ano',
              font: {
                size: 16,
                family: 'Poppins',
                weight: 'bold'
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
