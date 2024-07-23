import { Component, OnInit } from '@angular/core';
import { ApiConnect } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { OrganizationCard } from '../../components/organization card/organization-card';
import { NavComponent } from "../../components/nav/nav.component";

@Component({
    selector: 'app-individual-page-component',
    standalone: true,
    templateUrl: './individual-page-component.component.html',
    styleUrl: './individual-page-component.component.css',
    imports: [CommonModule, OrganizationCard, NavComponent, RouterModule]
})
export class IndividualComponent implements OnInit{
  constructor(private apiConnect : ApiConnect, private router: Router){}

  ngOnInit(): void {
  }
}
