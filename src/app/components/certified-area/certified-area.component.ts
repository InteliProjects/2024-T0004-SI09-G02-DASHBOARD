import { Component, AfterViewInit} from '@angular/core';
import { Chart, registerables } from "chart.js";
import { ApiConnect } from '../../services/api.service';

@Component({
  selector: 'app-medical-note-chart',
  standalone: true,
  templateUrl: './certified-area.component.html',
  styleUrls: ['./certified-area.component.css']
})
export class MedicalNoteComponent implements AfterViewInit {
  private mixedChart: Chart | undefined;

  constructor(private apiConnect: ApiConnect) {}

  ngAfterViewInit(): void {
    Chart.register(...registerables);
    this.createMixedChart();
    this.getCertificate();
  }

  getCertificate() {
    this.apiConnect.getCertificateQuantity().subscribe((response: any) => {
      let jsonobj = response.body || [];
      jsonobj.sort((a: any, b: any) => b.quantidadeAfastamentos - a.quantidadeAfastamentos);
      const diretorias = jsonobj.map((item: any) => item.diretoria);
      const quantidadeAtestados = jsonobj.map((item: any) => item.quantidadeAtestados);
      const quantidadeAfastamentos = jsonobj.map((item: any) => item.quantidadeAfastamentos);

      if (this.mixedChart) {
        this.mixedChart.data.labels = diretorias;
        this.mixedChart.data.datasets[0].data = quantidadeAfastamentos;
        this.mixedChart.data.datasets[1].data = quantidadeAtestados;
        this.mixedChart.update();
      }
    });
  }

  createMixedChart() {
    const canvas = document.getElementById('certified-area') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.mixedChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Dias Afastados',
          data: [],
          backgroundColor: 'rgba(3, 10, 100)',
          order: 2
        }, {
          label: 'Quantidade de Atestados',
          data: [],
          borderColor: 'rgba(255, 66, 66)',
          type: 'line',
          fill: false,
          order: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Afastamentos por diretoria',
            font: {
              size: 16,
              family: 'Poppins',
              weight: 'bold',
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
