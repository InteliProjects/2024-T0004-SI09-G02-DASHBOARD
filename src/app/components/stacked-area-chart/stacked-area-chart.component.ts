import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiConnect } from '../../services/api.service';

Chart.register(...registerables);

@Component({
  selector: 'app-area-chart',
  templateUrl: './stacked-area-chart.component.html',
  styleUrls: ['./stacked-area-chart.component.css'],
  standalone: true,
})
export class AreaChartComponent implements AfterViewInit {
  private chart: Chart | null = null;
  private chartData: { [key: string]: number[] } = {};
  private monthsNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  constructor(private apiConnect: ApiConnect) { }
  
  ngAfterViewInit(): void {
    this.getAppointmentSpeciality();
  }    

  getAppointmentSpeciality() {
    this.apiConnect.getAppointmentsQuantity().subscribe((response: any) => {
      const jsonobj = response.body || [];
      console.log(jsonobj);
      this.processData(jsonobj);
    });
  }

  processData(data: any[]) {
    // Initialize chart data for both specialities
    const labels = Object.values(this.monthsNames);
    const specialities = ['psicologia', 'psiquiatria'];
    specialities.forEach(speciality => {
      this.chartData[speciality] = Array(labels.length).fill(0);
    });
  
    // Process the data
    data.forEach(item => {
      const monthIndex = parseInt(item.mes) - 1;
      const year = item.ano;
      if (monthIndex >= 0 && monthIndex < 12 && year === '2023') { 
        const speciality = (item.especialidade || '').toLowerCase(); 
        if (this.chartData.hasOwnProperty(speciality)) {
          this.chartData[speciality][monthIndex] += item.numeroConsultas;
        }
      }
    });
  
    this.createChart();
  }

createChart() {
    const canvas = document.getElementById('areaChart') as HTMLCanvasElement;
    if (!canvas || !canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        return;
    }
    const labels = Object.values(this.monthsNames);

    const datasets = Object.keys(this.chartData).map(speciality => ({
        label: speciality.charAt(0).toUpperCase() + speciality.slice(1),
        data: this.chartData[speciality],
        backgroundColor: speciality === 'psicologia' ? 'rgba(255, 159, 64, 0.2)' : 'rgba(54, 162, 235, 0.4)',
        borderColor: speciality === 'psicologia' ? 'rgba(255, 159, 64, 1)' : 'rgba(54, 162, 235, 1)',
        fill: true,
        tension: 0.4
    }));

    if (this.chart) {
        this.chart.destroy();
    }

    this.chart = new Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true }
            },
            plugins: {
                legend: { position: 'top' },
                title: {
                    display: true,
                    text: 'Quantidade de consultas por especialidade médica ao longo dos meses',
                    font: { size: 16, weight: 'bold', family: 'Poppins' }
                }
            }
        }
    });
}}
