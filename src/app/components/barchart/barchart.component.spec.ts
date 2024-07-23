// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { BarchartComponent } from "./barchart.component";

// describe("BarchartComponent", () => {
//   let component: BarchartComponent;
//   let fixture: ComponentFixture<BarchartComponent>;
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({}).compileComponents();
//   });
//   beforeEach(() => {
//     fixture = TestBed.createComponent(BarchartComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//   it("should create", () => {
//     expect(component).toBeTruthy();
//   });
//   it("should render canvas element", () => {
//     const canvasElement: HTMLCanvasElement =
//       fixture.nativeElement.querySelector("canvas");
//     expect(canvasElement).toBeTruthy();
//     expect(canvasElement.id).toEqual("myChart");
//   });
//   it("should create chart after view initialization", () => {
//     spyOn(component, "createChart");
//     component.ngAfterViewInit();
//     expect(component.createChart).toHaveBeenCalled();
//   });
// });
