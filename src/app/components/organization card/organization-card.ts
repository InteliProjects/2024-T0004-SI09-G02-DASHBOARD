import { Component, OnInit } from '@angular/core';
import { ApiConnect } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-organization-card',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './organization-card.html',
    styleUrl: './organization-card.css'
})
export class OrganizationCard implements OnInit{
    isSidebarOpen: boolean = window.innerWidth > 999;
    
    cards: {
        name: string;
        department: string;
        StibaScore: number;
        EmpresaScore: number;
        GPTWScore: number;
        Rating: string;}[] = [];

    constructor(private apiConnect : ApiConnect, private router: Router){}
    
      ngOnInit(): void {
        this.getOrganization()
      }

      getOrganization() {
        this.apiConnect.getOrganization()
          .subscribe((response: any) => 
          {
            var jsonobj = response.body || [];
            this.cards = jsonobj.map((item: any) => ({
              name: item.nomeVps,
              department: item.areaDiretoria,
              StibaScore: item.notaStiba2023.toString(),
              EmpresaScore: item.notaEmpresa2023.toString(),
              GPTWScore: item.notaGPTW2023.toString(),
              Rating: this.getRating(parseFloat(item.notaStiba2023), parseFloat(item.notaEmpresa2023))
            }));
          });
      }

isAboveRating(rating: string): boolean {
  return rating.startsWith('Acima');
}

isBelowRating(rating: string): boolean {
  return rating.startsWith('Abaixo');
}


      getRating(stibaScore: number, gptwScore: number): string {
        let difference = (stibaScore - gptwScore).toFixed(2);
        if (stibaScore > gptwScore ){
          return `Acima da Média em: ${difference} pontos`;
        } else if (stibaScore < gptwScore ) {
          return `Abaixo da Média em ${difference} pontos`;
        } else {
          return 'Igual';
        }
      }
}