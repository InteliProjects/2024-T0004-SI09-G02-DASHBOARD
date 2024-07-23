import { Component, AfterViewInit } from "@angular/core";
import { Chart, registerables } from "chart.js";
import { ChartDetails } from "../DTOs/chart.details";
import { ApiConnect } from "../../services/api.service";
import {
  ZenklubDetails,
} from "../../services/DTOservices/zenklubDetails";

@Component({
  selector: "app-linechart",
  standalone: true,
  templateUrl: "./linechart.component.html",
  styleUrls: ["./linechart.component.css"],
})
export class LinechartComponent implements AfterViewInit {

  lineColors: string[] = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

  chart?: Chart;

  constructor(private apiConnect: ApiConnect) {}
  data!: ZenklubDetails;

  chart1: ChartDetails = {
    categories: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    series: [],
    title: ""
  };

  ngAfterViewInit(): void {
    Chart.register(...registerables);
    this.getZenklub();
  }

  createChart(): void {
    const ctx = document.getElementById("LineChart") as HTMLCanvasElement;
    new Chart(ctx, {
      type: "line",
      data: {
        labels: this.chart1.categories,
        datasets: this.chart1.series.map((s, index) => ({
          label: s.name,
          data: s.data,
          fill: false,
          borderColor: this.lineColors[index % this.lineColors.length], 
          tension: 0.4,
        })),
      },
      options: {
        responsive: true, 
        maintainAspectRatio: false,
        plugins: {
          title: {
            text: 'Quantidade de sessões do zenklub por mês do ano',
            display: true,
            font: {
              size: 16,
              family: 'Poppins',
              weight: 'bold',
          },
        },
      },
    }
  });
  }
  
  getZenklub() {
    this.apiConnect
      .GetTotalSessionsByDepartment()
      .subscribe((response: any) => {
        const jsonobj = response.body || [];
        let sessionsByMonth: { [key: string]: number[] } = {};

        jsonobj.forEach((item: any) => {
          const department = item.departamento;
          const month = item.mes - 1;
          const sessionCount = item.totalSessoes;

          if (!sessionsByMonth[department]) {
            sessionsByMonth[department] = Array(12).fill(0);
          }
          sessionsByMonth[department][month] = sessionCount;
        });

        this.chart1.series = Object.keys(sessionsByMonth).map((department) => ({
          name: department,
          data: sessionsByMonth[department],
        }));

        if (this.chart) {
          this.chart.data.datasets = this.chart1.series.map((s) => ({
            label: s.name,
            data: s.data,
            fill: false,
            borderColor: '#3BBDC4',
            tension: 0.4,
          }));
          this.chart.update();
        } else {
          this.createChart();
        }
      });
  }
}
