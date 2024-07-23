import { Component, AfterViewInit, OnDestroy} from "@angular/core";
import { Chart, registerables } from "chart.js";
import { ApiConnect } from "../../services/api.service";
import { combineLatest, map, Subscription } from "rxjs";


@Component({
  selector: "app-barchart",
  standalone: true,
  templateUrl: "./barchart.component.html",
  styleUrls: ["./barchart.component.css"],
})
export class BarchartComponent implements AfterViewInit, OnDestroy {

  chartDetails = {
    title: "",
    categories: ["2022", "2023"],
    series: [
      {
        name: "Stiba",
        data: [] as number[],
        backgroundColor: "#3BBDC4",
        borderColor: "#A2D2FC",
      },
      {
        name: "GPTW",
        data: [] as number[],
        backgroundColor: "rgba(98, 182, 239, 0.6)",
        borderColor: "rgba(98, 182, 239, 1)",
      },
    ],
  };
  
  private subscriptions: Subscription | undefined;

  constructor(private apiConnect: ApiConnect) {}

  ngAfterViewInit(): void {
    Chart.register(...registerables);
    this.getScore();
  }

  createChart(): void {
    const ctx = document.getElementById("barchart-component") as HTMLCanvasElement;
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: this.chartDetails.categories,
        datasets: this.chartDetails.series.map((s) => ({
          label: s.name,
          data: s.data,
          backgroundColor: s.backgroundColor,
          borderColor: s.borderColor,
          borderWidth: 1,
        })),
      },
      options: {
        responsive: true, 
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            font: {
              size: 16,
              family: 'Poppins',
            },
            text: "Comparação de notas entre STIBA e GPTW ao longo dos anos",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  getScore() {
    this.subscriptions = combineLatest([
      this.apiConnect.getStiba().pipe(
        map((response: any) => response.body || [])
      ),
      this.apiConnect.getGptwEngage().pipe(
        map((response: any) => response.body || [])
      )
    ]).subscribe(([jsonArray1, jsonArray2]) => {
      this.getScoreStiba(jsonArray1, ["Volkswagen do Brasil", "B COO - ... OPERATING OFFICER VWB"]);
      this.getScoreGptw(jsonArray2);
      this.updateChart();
    });
  }
  
  updateChart() {
    this.chartDetails.series[0].data = this.chartDetails.series[0].data.slice();
    this.chartDetails.series[1].data = this.chartDetails.series[1].data.slice();
    this.createChart();
  }
  

  getScoreStiba(jsonArray: any, departmentFilter: string[]) {
    let stibaData = Array(this.chartDetails.categories.length).fill(0);

    jsonArray.forEach((item: any) => {
      const scoreStiba = item.notaStiba;
      const year = item.ano;
      const department = item.descricaoUO;

      if (this.chartDetails.categories.includes(year) && departmentFilter.includes(department)) {
        const index = this.chartDetails.categories.indexOf(year);
        stibaData[index] = scoreStiba;
      }
    });

    this.chartDetails.series[0].data = stibaData;
  }

  getScoreGptw(jsonArray: any) {
    let gptwData = Array(this.chartDetails.categories.length).fill(0);

    jsonArray.forEach((item: any) => {
      const scoreGptw = item.indexVerdade;
      const year = item.ano;

      if (this.chartDetails.categories.includes(year)) {
        const index = this.chartDetails.categories.indexOf(year);
        gptwData[index] = scoreGptw;
      }
    });

    this.chartDetails.series[1].data = gptwData;
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}