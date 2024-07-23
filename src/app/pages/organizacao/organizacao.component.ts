import { Component, OnInit } from '@angular/core';
import { ApiConnect } from '../../services/api.service';
import { OrganizationDetails, OrganizationDetailsOne } from '../../services/DTOservices/organizationDetails';
import { ChartDetails } from '../../components/DTOs/chart.details';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OrganizationCard } from '../../components/organization card/organization-card';
import { NavComponent } from "../../components/nav/nav.component";

@Component({
    selector: 'app-organization',
    standalone: true,
    templateUrl: './organizacao.component.html',
    styleUrl: './organizacao.component.css',
    imports: [CommonModule, OrganizationCard, NavComponent]
})
export class OrganizacaoComponent implements OnInit{
  constructor(private apiConnect : ApiConnect, private router: Router){}

  ngOnInit(): void {
  }
}
