import { Component, OnInit } from '@angular/core';
import { ApiConnect } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OrganizationCard } from '../../components/organization card/organization-card';
import { NavComponent } from "../../components/nav/nav.component";
import { DashboardCardComponent } from "../../components/card-dashboard/card-dashboard.component";
import { BarchartComponent } from "../../components/barchart/barchart.component";
import { CalendarComponent } from "../../components/calendar chart/calendar.component";
import { LinechartComponent } from "../../components/linechart/linechart.component";
import { ZenklubCardComponent } from "../../components/zenklub-card/zenklub-card.component";
import { TableComponent } from "../../components/table/table.component";
import { IndividualComponent } from "../../components/individual-page-component/individual-page-component.component";
import { MedicalNoteComponent } from "../../components/certified-area/certified-area.component";
import { DoctorAppointmentChartComponent } from "../../components/doctor-apointment-chart/doctor-appointment-chart.component";
import { MyBarChartComponent } from "../../components/horizontal bar chart/horizontalBar.component";
import { AreaChartComponent } from "../../components/stacked-area-chart/stacked-area-chart.component";


@Component({
    selector: 'app-individual-page',
    standalone: true,
    templateUrl: './individual-page.component.html',
    styleUrl: './individual-page.component.css',
    imports: [CommonModule, OrganizationCard, NavComponent, DashboardCardComponent, BarchartComponent, CalendarComponent, LinechartComponent, ZenklubCardComponent, TableComponent, IndividualComponent, MedicalNoteComponent, DoctorAppointmentChartComponent, MyBarChartComponent, AreaChartComponent]
})
export class IndividualPageComponent implements OnInit{
  constructor(private apiConnect : ApiConnect, private router: Router){}

  ngOnInit(): void {
  }
}
