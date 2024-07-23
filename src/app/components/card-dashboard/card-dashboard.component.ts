import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';

import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiConnect } from '../../services/api.service';

@Component({
  selector: 'app-card-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatStepperModule,
  ],
  templateUrl: './card-dashboard.component.html',
  styleUrl: './card-dashboard.component.css',
})
export class DashboardCardComponent implements AfterViewInit{
  constructor(private apiConnect: ApiConnect) {}

  ngAfterViewInit(): void {
    this.getCards();
  }

  cardsDashboard: {
    title: string;
    value: string;
    description: string;
  }[] = [

  ];

  getCards() {
    this.apiConnect
      .getStiba()
      .subscribe((response: any) => {
        const jsonStiba = response.body || [];
        this.getCardStiba(jsonStiba, "Volkswagen do Brasil");
    });

    this.apiConnect
      .getGptwEngage()
      .subscribe((response: any) => {
        const jsonGptw = response.body || [];
        this.getCardGptwEngage(jsonGptw, "2023");
    });
  }

  getCardStiba(jsonArray: any, departmentFilter: string) {
    const filteredData = jsonArray.filter((jsonObj: any) => jsonObj.descricaoUO === departmentFilter);

    if (filteredData.length > 0) {
      const jsonObj = filteredData[0];
      const title = "Respondentes Stiba";
      const value = jsonObj.participante + "%";
      const description = "de " + jsonObj.respondentes + " funcionários no ano " + jsonObj.ano;

      this.cardsDashboard.push({
        title: title,
        value: value,
        description: description,
      });
    }
  }

  getCardGptwEngage(jsonArray: any, yearFilter: string) {
    const filteredData = jsonArray.filter((jsonObj: any) => jsonObj.ano === yearFilter);

    if (filteredData.length > 0) {
      const jsonObj = filteredData[0];
      const title = "Engajamento GPTW";
      const value = jsonObj.engajamentoPorcentagem + "%";
      const description = "registro do ano " + jsonObj.ano;

      this.cardsDashboard.push({
        title: title,
        value: value,
        description: description,
      });
    }
  }
}
