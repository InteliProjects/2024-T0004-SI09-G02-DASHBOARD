# Painel gerencial para gestão empresarial - Saúde Mental dos Colaboradores
## Grupo: GTI

## Introdução

Este projeto consiste em um painel gerencial desenvolvido para auxiliar na gestão empresarial focada na saúde mental dos colaboradores da Volkswagem Brasil. Através deste sistema, é possível monitorar diversos aspectos relacionados ao bem-estar psicológico dos funcionários, oferecendo insights valiosos para tomadas de decisão estratégicas dos VPs das áreas.
Para construir esse painel gerencial, foi necessário mergulhar em algumas tecnologias para a criação de um ambiente interativo e inovador. Assim essa documentação foi realizada para facilitar o uso e manutenção desse sitema visual.

## Pré-requisitos

- Node.js 20.11.1 instalado e configurado.
- Angular 17 instalado.
- npm instalado.
- Docker (opcional, futura implementação).

## Inicialização do projeto
### Obtendo o código

- Abra o terminal e clone o repositório do projeto. Utilize o código abaixo para  realizar a clonagem.

```bash
git clone https://github.com/Inteli-College/2024-T0004-SI09-G02-DASHBOARD.git
```

- Ou faça o download do código-fonte e descompacte-o.
<br><br><br>


## Construção da imagem Docker <b><i>(Em construção)</i></b>

- Abra o cmd e execute o seguinte comando no terminal para construir a imagem Docker:

```bash
docker build .
```
<br><br><br>

## Execução da aplicação
- Antes de tudo, instale as dependências do projeto:
```
npm install
```

- Execute o seguinte comando para executar a aplicação 
```
npm start
```
ou 
```
ng serve
```
A aplicação estará acessível em http://localhost:4200.

## Integrantes do projeto

- [Daniel Barzilai](https://www.linkedin.com/in/daniel-barzilai-061036234/)
- [Dayllan Alho](https://www.linkedin.com/in/dayllan-alho/)
- [Pedro Rezende](https://www.linkedin.com/in/pedrocrezende/)
- [Izabela Farias](https://www.linkedin.com/in/izabellaalmeida/)
- [Vinícius Fernandes](https://www.linkedin.com/in/vinicius-oliveira-fernandes/)
- [Vitor Moura](https://www.linkedin.com/in/vitor-moura-de-oliveira/)

## Demais itens

### Tecnologias utilizadas

- Angular 17
- Node.js 20.11.1

### Bibliotecas e Frameworks

- Angular Material
-Material Icon

### Deploy

- EM CONSTRUÇÃO

### Links úteis

- [Documentação do Angular 17](https://angular.io/docs)
- [Introdução ao Angular](https://blog.angular.io/introducing-angular-v17-4d7033312e4b)
- [Node.js - Download](https://nodejs.org/en/download/current)


## Apêndice (Em construção)

```bash
Apêndice
```

# Testes Unitários do Componente Barchart

Este documento descreve os testes unitários para o componente Barchart.

## Configuração dos Testes

Antes de executar os testes, é necessário configurar o ambiente de teste. Isso é feito utilizando as funções `beforeEach`.

```typescript
beforeEach(async () => {
  await TestBed.configureTestingModule({}).compileComponents();
});

beforeEach(() => {
  fixture = TestBed.createComponent(BarchartComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});
```

# Testes
## Teste: Deve ser criado corretamente

Este teste verifica se o componente Barchart é criado corretamente.
```typescript
it("should create", () => {
  expect(component).toBeTruthy();
});
```
## Teste: Deve renderizar o elemento canvas

Este teste verifica se o componente renderiza corretamente o elemento canvas com o ID "myChart".

```typescript
it("should render canvas element", () => {
  const canvasElement: HTMLCanvasElement =
    fixture.nativeElement.querySelector("canvas");
  expect(canvasElement).toBeTruthy();
  expect(canvasElement.id).toEqual("myChart");
});
```

## Teste: Deve criar o gráfico após a inicialização da view
Este teste verifica se o método createChart é chamado após a inicialização da view.

```typescript
it("should create chart after view initialization", () => {
  spyOn(component, "createChart");
  component.ngAfterViewInit();
  expect(component.createChart).toHaveBeenCalled();
});
```
Essa adição documenta os testes unitários do componente Barchart de forma clara e detalhada, facilitando a compreensão e manutenção do código para outros membros da equipe.