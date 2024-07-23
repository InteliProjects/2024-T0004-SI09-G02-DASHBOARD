import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatStepperModule } from "@angular/material/stepper";

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
@Component({
  selector: "app-zenklub-card",
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatStepperModule,
  ],
  templateUrl: "./zenklub-card.component.html",
  styleUrl: "./zenklub-card.component.css",
})
export class ZenklubCardComponent {}
