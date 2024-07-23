# Processo de Deploy com GitHub Actions e Docker

Este documento fornece uma visão geral do processo de deploy da aplicação Angular do nosso projeto, utilizando um pipeline de Integração Contínua (CI) e Entrega Contínua (CD) implementado com GitHub Actions com containerização no Docker.

## GitHub Actions Workflow

O arquivo YAML no diretório `.github` define o pipeline CI/CD e é dividido em três principais trabalhos: `build`, `test` e `deploy`.

### Build Job

```
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '18.18.0'
      - run: npm install -g @angular/cli@latest
      - run: npm install
      - run: ng build --configuration=production
```
Processo realizado no **build**:

- Checkout: Obtém o código-fonte do repositório para o runner do GitHub.
- Setup Node.js: Configura o ambiente com a versão especificada do Node.js.
- Install Angular CLI: Instala a CLI do Angular globalmente.
- Install dependencies: Instala todas as dependências listadas no package.json.
- Build: Compila o aplicativo Angular para produção.

### Test Job
```
jobs:
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      # Steps similar to 'build' job but for running unit tests
```
Processo adicional realizado no "Test Job":

- needs: Especifica que o trabalho de teste depende da conclusão bem-sucedida do trabalho de construção.
- Unit Tests: A adição de teste aqui ela é feita a partir dos arquivos em typescript de spec. No entanto, os passos para execução dos testes unitários padrão do angular para tudo estão comentados. 
    - Para ativá-los, remova os comentários e assegure-se de que a CLI do Angular e as dependências estejam instaladas antes de executar `ng test`.

### Deploy Job

```
jobs:
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: johnbeynon/render-deploy-action@v0.0.8
        with:
          service-id: ${{ secrets.RENDER_SERVICE_ID }}
          api-key: ${{ secrets.RENDER_API_KEY }}
```
Processo adicional para o deploy final:

- Deploy to Production: Este passo usa uma action do GitHub para implantar o aplicativo na plataforma especificada, neste caso, o Render.
- secrets: Utiliza secrets do repositório para autenticar no serviço de hospedagem (chaves de acesso do Render).

### Docker Configuration 

```
FROM node:alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install -g @angular/cli
RUN npm install
RUN ng build
CMD ["ng", "serve", "--host", "0.0.0.0"]
```

A configuração do Docker constrói uma imagem contendo o aplicativo Angular:

- node:alpine: Uma imagem leve do Docker com Node.js instalado é usada como base.
- WORKDIR: Define o diretório de trabalho no container.
- COPY: Copia os arquivos do projeto para o container.
- npm install: Instala as dependências do projeto dentro do container.
- ng build: Compila o aplicativo Angular dentro do container.
- CMD: Define o comando para rodar o aplicativo Angular.


## CI/CD Pipeline Aplicado no projeto

O pipeline de CI/CD aplicado funciona da seguinte forma:

- Integração Contínua (CI): No push para o branch principal ou em um pull request, o GitHub Actions executa o build para compilar o código e, opcionalmente, executar os testes unitários (test).

- Entrega Contínua (CD): Se o build e test passarem, o trabalho deploy é executado para implantar o aplicativo compilado em um ambiente de produção.

Este pipeline garante que cada alteração no código seja automaticamente construída e testada antes de ser entregue ao ambiente de produção, minimizando os riscos associados ao processo de deploy manual e aumentando a eficiência do ciclo de vida do desenvolvimento de software.

