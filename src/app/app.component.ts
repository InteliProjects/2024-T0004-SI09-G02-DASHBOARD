import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSidenavModule } from "@angular/material/sidenav";
import { environment } from "./environment";
import { OrganizacaoComponent } from "./pages/organizacao/organizacao.component";
import { OrganizationCard } from "./components/organization card/organization-card";
import { NavComponent } from "./components/nav/nav.component";
import { CalendarComponent } from "./components/calendar chart/calendar.component";
import { MyBarChartComponent } from "./components/horizontal bar chart/horizontalBar.component";
import { DashboardCardComponent } from "./components/card-dashboard/card-dashboard.component";
import { BarchartComponent } from "./components/barchart/barchart.component";
import { LinechartComponent } from "./components/linechart/linechart.component";
import { AreaChartComponent } from "./components/stacked-area-chart/stacked-area-chart.component";
import { MedicalNoteComponent } from "./components/certified-area/certified-area.component";
import { DoctorAppointmentChartComponent} from "./components/doctor-apointment-chart/doctor-appointment-chart.component";
import { IndividualPageComponent } from "./pages/individual-page/individual-page.component";
@Component({
    selector: "app-root",
    standalone: true,
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
    imports: [
        RouterOutlet,
        RouterModule,
        LoginComponent,
        DashboardComponent,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatToolbarModule,
        MatMenuModule,
        MatBadgeModule,
        MatSidenavModule,
        OrganizacaoComponent,
        OrganizationCard,
        NavComponent,
        CalendarComponent,
        MyBarChartComponent,
        DashboardCardComponent,
        BarchartComponent,
        LinechartComponent,
        AreaChartComponent,
        MedicalNoteComponent,
        DoctorAppointmentChartComponent,
        IndividualPageComponent
    ]
})
export class AppComponent {
  apiUrl: string | undefined;
  title = "dashboard-VW";
  constructor() {
    this.apiUrl = environment.BASE_URL;
  }
}
