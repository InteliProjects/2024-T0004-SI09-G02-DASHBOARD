## Dashboard em Produção
O dashboard da aplicação está atualmente implantado e em funcionamento no ambiente de produção. Ele é construído usando Angular e é hospedado em um ambiente de produção com Node.js e no Render.com

### Tecnologias Utilizadas

a) **Angular:** Estrutura Typescript de plataforma única para construir aplicativos web dinâmicos.

b) **Node.js:** Ambiente de tempo de execução JavaScript que permite executar JavaScript no servidor.

### Fluxo de Trabalho de Implantação

O processo de implantação do dashboard no ambiente de produção envolve os seguintes passos:

Compilação: A aplicação Angular é compilada para produção, resultando em arquivos estáticos otimizados. Isso inclui a minimização de arquivos, a remoção de código não utilizado e a otimização de recursos para garantir que a aplicação seja executada de forma eficiente no ambiente de produção.

Implantação: Os arquivos compilados são implantados em um ambiente de produção. A implantação é o último passo para disponibilizar a aplicação para os usuários finais, ela garante uma implantação suave e livre de erros para evitar interrupções no serviço e garantir uma experiência do usuário positiva.

### Pipeline de CI/CD
- Configuração do Pipeline de CI/CD com GitHub Actions

O pipeline de CI/CD é configurado utilizando o GitHub Actions. Ele automatiza o processo de integração contínua e entrega contínua do seu dashboard. O pipeline inclui as seguintes etapas:

1. Compilação: Compilação da aplicação Angular para produção.
2. *Teste: Execução de testes unitários para garantir a integridade do código.
3. Implantação: Implantação do dashboard no ambiente de produção.

*Na execução de testes unitários, podemos garantir a integridade do código. Os testes são executados automaticamente para verificar se o código funciona conforme esperado, além disso é um parâmetro importante para medir a qualidade do código. Eles ajudam a identificar problemas e regressões no código antes da implantação.

### Arquivos de Configuração

Arquivo do GitHub Actions (em formato yaml)

```
# Exemplo de aplicação na branch develop

name: teste.Dashboard.WebApi

on:
  push:
    branches:
      - develop
  pull_request:
    branches:
      - develop

jobs:
  build:
    name: "Build"
    runs-on: ubuntu-latest

    steps:
    - name: "Checkout"
      uses: actions/checkout@v2

    - name: "Set Node.js"
      uses: actions/setup-node@v3
      with:
        node-version: '18.18.0'

    - name: "Install Angular CLI"
      run: npm install -g @angular/cli@latest

    - name: "Install dependencies"
      run: npm install

    - name: "Build"
      run: ng build --configuration=production
```

### Dockerfile
```
FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install -g @angular/cli@^17.2.0

RUN npm install

RUN ng build

CMD ["npm", "start", "--host", "0.0.0.0"]

```

**Observações para rodar o pipeline:**
- Certifique-se de ajustar o arquivo Dockerfile conforme necessário para corresponder à sua configuração específica de implantação.
- O pipeline precisa estar configurado para a ramificação da branch específica (denotada em cada um dos arquvios `yaml`)
