import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  dataAtual: Date = new Date();
  diasCalendario: Date[] = [];
  diasDestaque: Date[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.buscarDiasDestaque();
    this.construirCalendario();
  }

  buscarDiasDestaque() {
    const url = 'http://seu-endereco-backend/api/dias-destaque';

    this.http.get<any[]>(url).subscribe({
      next: (dados) => {
        this.diasDestaque = dados.map(dado => new Date(dado.data_evento));
        this.construirCalendario();
      },
      error: (erro) => {
        console.error('Falha ao buscar dados de destaque', erro);
      }
    });
  }

  construirCalendario() {
    const ano = this.dataAtual.getFullYear();
    const mes = this.dataAtual.getMonth();
    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
    this.diasCalendario = [];

    for (let dia = new Date(primeiroDia); dia.getDay() !== 0; dia.setDate(dia.getDate() - 1)) {
      this.diasCalendario.unshift(new Date(dia));
    }

    for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
      this.diasCalendario.push(new Date(ano, mes, dia));
    }

    for (let dia = new Date(ultimoDia); dia.getDay() !== 6; dia.setDate(dia.getDate() + 1)) {
      this.diasCalendario.push(new Date(dia));
    }
  }

  alterarMes(offsetMes: number) {
    this.dataAtual.setMonth(this.dataAtual.getMonth() + offsetMes);
    this.dataAtual = new Date(this.dataAtual.getTime());
    this.construirCalendario();
  }

  deveDestacar(dia: Date): boolean {
    return this.diasDestaque.some(dataDestaque => 
      dia.getDate() === dataDestaque.getDate() &&
      dia.getMonth() === dataDestaque.getMonth() &&
      dia.getFullYear() === dataDestaque.getFullYear()
    );
  }
}
