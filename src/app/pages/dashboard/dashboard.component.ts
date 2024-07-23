import { DashboardCardComponent } from "./../../components/card-dashboard/card-dashboard.component";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApiConnect } from "../../services/api.service";
import { RouterModule } from "@angular/router";
import { Router } from "@angular/router";
import { NavComponent } from "../../components/nav/nav.component";
import { OrganizationCard } from "../../components/organization card/organization-card";
import { BarchartComponent } from "../../components/barchart/barchart.component";
import { CalendarComponent } from "../../components/calendar chart/calendar.component";
import { MyBarChartComponent } from "../../components/horizontal bar chart/horizontalBar.component";
import { LinechartComponent } from "../../components/linechart/linechart.component";
import { MedicalNoteComponent } from "../../components/certified-area/certified-area.component";
import { ZenklubCardComponent } from "../../components/zenklub-card/zenklub-card.component";
import { TableComponent } from "../../components/table/table.component";
import { DoctorAppointmentChartComponent } from "../../components/doctor-apointment-chart/doctor-appointment-chart.component";
import { AreaChartComponent } from "../../components/stacked-area-chart/stacked-area-chart.component";


@Component({
    selector: "app-dashboard",
    standalone: true,
    templateUrl: "./dashboard.component.html",
    styleUrl: "./dashboard.component.css",
    imports: [
        CommonModule,
        RouterModule,
        NavComponent,
        OrganizationCard,
        BarchartComponent,
        DashboardCardComponent,
        CalendarComponent,
        MyBarChartComponent,
        LinechartComponent,
        MedicalNoteComponent,
        ZenklubCardComponent,
        TableComponent,
        DoctorAppointmentChartComponent,
        AreaChartComponent
    ]
})
export class DashboardComponent {
  isSidebarOpen: boolean = window.innerWidth > 999;
  data: {
    data?: Date;
  }[] = [{ data: new Date() }];
  lastUpdate: any;
  constructor(private readonly apiConnect: ApiConnect, private router: Router) {
    window.addEventListener("resize", () => {
      this.apiConnect;
      this.isSidebarOpen = window.innerWidth > 999;
      this.lastUpdate = new Date("2024-03-08T21:49:00");
    });
  }
  zenclubs: {
    title?: string;
    subtitle?: string;
    value?: number;
    description1?: string;
  }[] = [
    {
      title: "Média mensal de sessões no zenclub",
      subtitle: "em horas",
      value: 1.059,
      description1: "84% of total (1,260)",
    },
    {
      title: "Satisfação geral quanto ao suporte à saúde mental",
      value: 200,
      description1: "20% of total (1000)",
    },
  ];
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}
}
