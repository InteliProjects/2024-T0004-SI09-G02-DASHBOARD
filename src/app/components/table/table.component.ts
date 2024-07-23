import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

@Component({
  selector: "app-table",
  standalone: true,
  imports: [
    MatTabsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.css",
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ["perguntas", "respondentes", "nota_media"];
  
  dataSourceGPTW = new MatTableDataSource<FeedbackData>([
    { perguntas: "Pergunta 1", respondentes: 120, nota_media: 4.3 },
    { perguntas: "Pergunta 2", respondentes: 100, nota_media: 4.1 },
    { perguntas: "Pergunta 3", respondentes: 150, nota_media: 4.5 },
  ]);
  
  dataSourceStibla = new MatTableDataSource<FeedbackData>([
    { perguntas: "Pergunta 4.0", respondentes: 80, nota_media: 4.0 },
    { perguntas: "Pergunta 5", respondentes: 70, nota_media: 4.2 },
    { perguntas: "Pergunta 6", respondentes: 100, nota_media: 4.4 },
  ]);
  
  @ViewChild("paginatorGPTW", { static: true }) paginatorGPTW!: MatPaginator;
  @ViewChild("paginatorStibla", { static: true })
  paginatorStibla!: MatPaginator;

  ngAfterViewInit() {
    this.dataSourceGPTW.paginator = this.paginatorGPTW;
    this.dataSourceStibla.paginator = this.paginatorStibla;
  }
}

export interface FeedbackData {
  perguntas: string;
  respondentes: number;
  nota_media: number;
}