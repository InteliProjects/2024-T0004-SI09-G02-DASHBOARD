# Análise Heurística

As Heurísticas de Nielsen são conjuntos de princípios projetados para avaliar a usabilidade das interfaces de usuário, criadas por Jakob Nielsen e Rolf Molich no início dos anos 90. Elas estabelecem um padrão amplamente aceito para o design de interfaces, com o objetivo primordial de tornar a interação com o sistema mais intuitiva, eficiente e gratificante. Através da aplicação destas heurísticas, é possível realizar uma avaliação heurística que busca identificar problemas de usabilidade que possam impedir a melhor experiência do usuário. Estas não são regras inflexíveis, mas sim diretrizes adaptáveis que são moldadas de acordo com as necessidades específicas do contexto e do tipo de aplicação em desenvolvimento. São consideradas essenciais para fomentar um design centrado no usuário e são empregadas de forma abrangente tanto na avaliação quanto na melhoria da usabilidade das interfaces.

1. **Visibilidade e status do sistema:** A interface deve manter os usuários informados sobre o que está acontecendo, fornecendo feedback imediato após suas ações e mantendo-os atualizados sobre o processamento em andamento ou o estado atual do sistema.

2. **Correspondência entre o sistema e o mundo real:** A interface deve usar uma linguagem que seja familiar ao usuário, recorrendo a conceitos do mundo real e apresentando informações de forma coerente e lógica.

3. **Controle do usuário e liberdade:** É crucial oferecer aos usuários meios de sair de uma situação indesejada sem ter que passar por um extenso processo; as interfaces devem permitir desfazer e refazer ações.

4. **Consistência e padrões:** Os usuários não devem ter que questionar se diferentes palavras, situações ou ações têm o mesmo significado. O sistema deve seguir convenções consistentes.

5. **Prevenção de erros:** Idealmente, as interfaces devem evitar a ocorrência de erros, incorporando elementos de design que previnam erros antes de acontecerem.

6. **Reconhecimento em vez de lembrança:** As interfaces devem reduzir a carga cognitiva dos usuários, tornando objetos, ações e opções visíveis e facilmente recuperáveis.

7. **Flexibilidade e eficiência de uso:** As interfaces devem ser flexíveis, servindo tanto usuários novatos quanto experientes e permitindo que estes últimos realizem operações mais rapidamente.

8. **Estética e design minimalista:** As interfaces não devem conter informações desnecessárias ou raramente necessárias, pois cada unidade adicional de informação compete com as unidades relevantes e diminui sua visibilidade.

9. **Ajuda os usuários a reconhecer, diagnosticar e recuperar-se de erros:** As mensagens de erro devem ser expressas em linguagem simples e indicar claramente o problema, bem como sugerir uma solução.

10. **Ajuda e documentação:** Embora seja ideal que o sistema possa ser utilizado sem a necessidade de documentação, a ajuda e a documentação podem ser necessárias e devem ser de fácil acesso, centradas nas tarefas do usuário e não excessivamente complexas.

Nosso dashboard incorpora principalmente seis destas heurísticas. A seguir, detalhamos as heurísticas presentes em nosso projeto e aquelas que ainda não estão sendo totalmente atendidas pela nossa solução.

![image](https://github.com/Inteli-College/2024-T0004-SI09-G02-DASHBOARD/assets/99206817/f4ef9de8-445c-4639-8749-f2cfa7dc2c16)
Imagem 1: Página de dashboard da interface.

![image](https://github.com/Inteli-College/2024-T0004-SI09-G02-DASHBOARD/assets/99206817/d5b69efa-a40a-46f2-a4d5-223b6eaf5657)
Imagem 1: Página de organização da interface.

# Análise Detalhada

## 1. Visibilidade e status do sistema

Nosso exame do dashboard atual revelou uma notável ausência de feedback imediato para o usuário, o que pode causar incerteza e confusão. Os usuários podem sentir-se no escuro sobre se suas ações foram bem-sucedidas ou mesmo se o sistema está operando corretamente. A seguir, detalhamos a severidade dos problemas identificados:

| Problema                             | Severidade | Justificativa |
|--------------------------------------|------------|---------------|
| Ausência de feedback após ações do usuário | Moderada | A falta de confirmação visual após uma ação pode gerar incerteza, levando o usuário a repetir a ação ou duvidar da eficácia do sistema. |
| Falta de indicadores de progresso ou carregamento | Moderada | Operações em andamento, como processamento ou uploads de dados, podem ser mal interpretadas como falhas do sistema na ausência de um indicador claro. |
| Inexistência de confirmações de ações concluídas ou erros | Moderada | Sem a confirmação clara do sucesso ou falha de uma ação, os usuários ficam sem saber se devem prosseguir ou tomar medidas corretivas. |

A fim de abordar essas questões e aprimorar nossa interface, as seguintes melhorias serão consideradas para a próxima sprint:

1. **Inclusão de feedback visual e indicadores de status:** Implementar feedback visual, como animações de spinner ou mensagens de confirmação, para indicar o progresso e a conclusão das ações do usuário.

2. **Mensagens de confirmação:** Prover mensagens de confirmação, alertas ou diálogos que informem o usuário após a conclusão bem-sucedida de uma ação ou quando ocorrem erros.

3. **Indicadores de status do sistema:** Incorporar uma área designada no layout que exiba mensagens de status do sistema, especialmente úteis para processos de longa duração como uploads de arquivos ou geração de relatórios.

A aplicação destas melhorias não só reforçará a relevância das informações apresentadas mas também potencializará a usabilidade geral, elevando a eficiência comunicativa da interface com o usuário.

## 2. Correspondência entre o sistema e o mundo real

O design do dashboard reflete um alinhamento entre a terminologia usada e os conceitos empresariais familiares aos usuários. O uso de ícones representativos e a apresentação de dados percentuais são intuitivos e estão em sintonia com as expectativas do usuário dentro do ambiente corporativo. Contudo, identificamos áreas que exigem atenção adicional:

| Problema                             | Severidade | Justificativa |
|--------------------------------------|------------|---------------|
| Terminologia técnica como "Taxa de Turnover Relacionada à Saúde Mental" | Baixa | Termos técnicos específicos podem não ser imediatamente claros, especialmente para usuários não familiarizados com jargões de RH. |
| Contextualização insuficiente na apresentação de dados em gráficos | Baixa | A falta de informações contextuais pode retardar a interpretação dos dados, apesar dos gráficos de barra serem uma forma comum e reconhecida de representação. |

Para enriquecer a correspondência entre o sistema e o mundo real e melhorar a compreensão do usuário, propomos as seguintes ações para a próxima sprint:

1. **Inclusão de glossário e tooltips explicativos:** Integrar um glossário acessível e tooltips informativos que forneçam definições e explicações ao passar o cursor sobre termos e ícones complexos.

2. **Descrições e legendas nos dados:** Adicionar legendas claras e descrições contextuais aos gráficos de barra para fornecer informações adicionais e facilitar a compreensão imediata dos dados apresentados.

Estas melhorias visam aprimorar a comunicação entre o sistema e seus usuários, tornando a interface mais acessível e o entendimento dos dados mais imediato.

## 3. Visibilidade do status do sistema

Nosso dashboard proporciona um menu lateral que facilita a navegação entre as diversas seções, oferecendo controle direto ao usuário. Entretanto, identificamos oportunidades de aprimoramento:

| Problema Identificado                 | Severidade | Justificativa |
|---------------------------------------|------------|---------------|
| Navegação não intuitiva para novos usuários | Menor | Novos usuários podem ter dificuldades em navegar devido à falta de orientação inicial. |
| Ausência de opções 'desfazer' para ações realizadas via menu | Moderado | A falta de uma opção rápida de 'desfazer' pode levar a frustrações e erros desnecessários. |

Para a próxima sprint, planejamos abordar estes pontos da seguinte maneira:

1. **Melhoria na Intuitividade do Menu Lateral:** Implementar elementos visuais e textuais que orientem os novos usuários, como ícones mais descritivos e uma breve introdução ao menu.

2. **Inclusão de Atalhos de Desfazer e Refazer:** Adicionar funcionalidades de desfazer e refazer acessíveis, que permitam aos usuários corrigir ações inadvertidas rapidamente.

3. **Desenvolvimento de Navegação Estruturada:** Integrar métodos de navegação adicionais, como 'breadcrumbs', para fornecer clareza sobre a localização atual do usuário e facilitar a movimentação entre as seções.

Ao implementar essas melhorias, visamos fortalecer a usabilidade geral do dashboard, aumentando a confiança do usuário e a eficácia da interface.

## 4. Consistência e padrões

Avaliando as páginas 'Dashboard Geral' e 'Organização', percebemos um compromisso com a consistência visual e operacional. Contudo, acreditamos que há espaço para melhorias:

| Problema Identificado                   | Severidade | Justificativa |
|-----------------------------------------|------------|---------------|
| Variações estilísticas entre componentes | Baixa      | Diferenças sutis no design podem prejudicar a consistência visual e a experiência do usuário. |
| Apresentação inconsistente de dados     | Moderada   | Inconsistências na forma como os dados são exibidos podem confundir e frustrar os usuários. |
| Elementos interativos inconsistentes    | Moderada   | Diferenças no estilo dos elementos interativos podem impactar negativamente na navegabilidade. |

Para a próxima sprint, propomos as seguintes melhorias:

1. **Harmonização de Componentes Visuais:** Refinar o design para garantir uma consistência estilística em todos os componentes do dashboard.

2. **Padronização da Apresentação de Dados:** Desenvolver um conjunto de diretrizes para a exibição de dados, visando uma maior consistência e previsibilidade na apresentação de informações.

3. **Uniformização dos Elementos Interativos:** Revisar e padronizar todos os elementos interativos para garantir que apresentem feedback consistente ao usuário.

4. **Realização de Testes de Usabilidade:** Conduzir sessões de teste de usabilidade para identificar quaisquer inconsistências remanescentes e ajustar conforme necessário.

Ao abordar essas questões, a equipe irá aprimorar ainda mais a coesão visual do sistema, resultando em uma experiência de usuário mais fluída e intuitiva.

## 5. Prevenção de erros

Nossa análise indicou que, embora o sistema seja robusto, existem oportunidades para fortalecer a prevenção de erros:

| Problema Identificado                   | Severidade | Justificativa |
|-----------------------------------------|------------|---------------|
| Entrada de dados sem validação          | Moderada   | Entradas de dados incorretas ou inválidas podem levar a erros que afetam a funcionalidade do sistema. |
| Ações críticas sem confirmações         | Moderada   | A falta de etapas de confirmação para ações importantes pode resultar em mudanças indesejadas ou perda de dados. |
| Falta de feedback para operações em curso | Baixa     | Operações sem um indicador claro podem ser percebidas erroneamente como falhas do sistema. |

Durante a próxima sprint, nossos objetivos incluem:

1. **Implementação de Validações de Dados:** Introduzir validações rigorosas para todos os campos de entrada de dados, reduzindo a probabilidade de erro humano.

2. **Confirmação de Ações Críticas:** Adicionar passos de confirmação para ações irreversíveis, oferecendo aos usuários uma chance de revisar antes de cometer a ação.

3. **Melhoria dos Indicadores de Operações em Andamento:** Implementar feedback visual claro, como barras de progresso ou animações, que indiquem a realização de operações de fundo.

4. **Auditoria de Fluxos de Trabalho:** Analisar os fluxos de trabalho existentes em busca de pontos propensos a erros e realizar ajustes para mitigar esses riscos.

Estas iniciativas visam estabelecer uma base sólida de prevenção de erros, minimizando a ocorrência de falhas e aumentando a confiança dos usuários no sistema.

## 6. Reconhecimento em vez de lembrança

O dashboard atual já facilita o reconhecimento, evitando que o usuário dependa da memória para realizar as tarefas. No entanto, podemos aumentar ainda mais a eficiência e a satisfação do usuário com algumas melhorias:

| Problema Identificado                 | Severidade | Justificativa |
|---------------------------------------|------------|---------------|
| Falta de consistência em ícones e rótulos | Baixa      | Embora os ícones sejam claros, uma padronização ainda maior poderia facilitar o reconhecimento imediato e reduzir o esforço mental. |
| Ausência de tooltips detalhados       | Baixa      | Tooltips detalhados podem fornecer informações adicionais de maneira conveniente, sem sobrecarregar a interface principal. |
| Informações contextuais não disponíveis | Moderada  | A falta de informações contextuais prontamente disponíveis exige que os usuários se lembrem de detalhes vistos em outro lugar, aumentando a carga cognitiva. |

Ações planejadas para a próxima sprint incluem:

1. **Revisão de Ícones e Rótulos:** Realizar uma revisão abrangente dos ícones e rótulos para aumentar a clareza e padronizar seu uso em todo o dashboard.

2. **Implementação de Tooltips Detalhados:** Adicionar tooltips informativos que sejam exibidos ao passar o mouse sobre ícones ou elementos de dados, fornecendo explicações imediatas e úteis.

3. **Disponibilização de Informações Contextuais:** Assegurar que informações pertinentes, como detalhes adicionais ou dados históricos, estejam imediatamente acessíveis para facilitar o reconhecimento e reduzir a necessidade de memorização.

Essas melhorias visam otimizar a experiência do usuário, reduzindo a necessidade de lembrar informações e tornando a interação com o dashboard mais intuitiva e agradável.

## 7. Flexibilidade e eficiência de uso

O design atual já é intuitivo, mas reconhecemos a importância de atender às necessidades de usuários com diferentes níveis de habilidade e experiência:

| Problema Identificado                 | Severidade | Justificativa |
|---------------------------------------|------------|---------------|
| Falta de atalhos e personalização     | Moderada   | Atalhos podem aumentar significativamente a eficiência de usuários frequentes, e a personalização pode melhorar a experiência do usuário ao permitir ajustes conforme suas necessidades específicas. |
| Acesso limitado a funções comuns      | Baixa      | Opções de acesso rápido a funções comumente usadas podem melhorar a eficiência de todos os usuários. |

Plano de ação para a próxima sprint:

1. **Desenvolvimento de Atalhos de Teclado e Personalização:** Criar atalhos de teclado personalizáveis e permitir que os usuários configurem e salvem preferências de layout do dashboard.

2. **Acesso Rápido a Funções Frequentes:** Introduzir widgets ou botões de acesso rápido para funções usadas com frequência, como atualização de dados ou exportação de relatórios.

Estas iniciativas visam aprimorar o dashboard para atender tanto usuários novatos quanto os mais experientes, proporcionando uma experiência altamente adaptável e eficiente.

## 8. Estética e design minimalista

Avaliando o design do dashboard, notamos um equilíbrio entre estética e funcionalidade. Contudo, sempre podemos melhorar a organização da informação e a aparência visual para maximizar a usabilidade:

| Problema Identificado                 | Severidade | Justificativa |
|---------------------------------------|------------|---------------|
| Diversidade na apresentação de dados  | Baixa      | Consistência na apresentação de dados contribui para uma experiência visualmente coesa e uma aprendizagem mais rápida. |
| Áreas com excesso de informações      | Moderada   | Uma quantidade excessiva de informações em uma área pode levar a uma sobrecarga cognitiva e distrair o usuário do que é mais importante. |

Nossas metas para a próxima sprint incluem:

1. **Harmonização da Apresentação de Dados:** Trabalhar na padronização dos estilos de apresentação dos dados para manter uma estética uniforme e coesa em todo o dashboard.

2. **Otimização de Espaço e Hierarquia Visual:** Utilizar espaço em branco e técnicas de design gráfico para criar uma hierarquia visual mais clara, guiando o usuário de forma intuitiva.

Ao focar nessas melhorias, pretendemos fornecer uma interface que não apenas pareça boa, mas também promova uma interação eficaz e livre de distrações.

## 9. Ajuda os usuários a reconhecer, diagnosticar e recuperar-se de erros

A capacidade de um sistema para auxiliar os usuários quando ocorrem erros é vital para manter a confiança e a eficiência. As telas atuais mostram que há espaço para aprimorar esse aspecto:

| Problema Identificado                 | Severidade | Justificativa |
|---------------------------------------|------------|---------------|
| Mensagens de erro não específicas     | Moderada   | Mensagens genéricas ou a falta de mensagens podem confundir os usuários e impedi-los de entender a natureza dos erros. |
| Orientação limitada para a recuperação de erros | Alta      | A falta de instruções claras e imediatas para resolver erros pode levar a uma maior frustração e desgaste do usuário. |

Ações recomendadas para a próxima sprint:

1. **Melhoria nas Mensagens de Erro:** Criar mensagens de erro detalhadas que informem claramente sobre o erro e forneçam instruções ou sugestões de correção.

2. **Implementação de Mecanismos de Recuperação de Erros:** Oferecer opções claras para os usuários corrigirem erros, como passos de 'desfazer' ou assistência passo a passo.

Essas ações ajudarão os usuários a entender e corrigir erros de forma mais eficiente, melhorando sua experiência geral com o sistema.

## 10. Ajuda e documentação

Por fim, a documentação e a ajuda são parcialmente contempladas, mas podem ser integradas de maneira mais efetiva:

| Problema Identificado                 | Severidade | Justificativa |
|---------------------------------------|------------|---------------|
| Ajuda interativa e documentação não integradas | Moderada   | A falta de uma função de ajuda interativa pode dificultar que os usuários encontrem o suporte necessário sem interromper suas atividades. |
| Dificuldade em localizar informações específicas | Baixa      | A documentação, embora útil, pode ser difícil de navegar sem um recurso de busca ou FAQs integradas. |

Para resolver essas questões, planejamos:

1. **Criação de Ajuda Interativa:** Implementar recursos de ajuda interativos, como um chatbot ou pesquisa inteligente, que possam fornecer assistência contextualizada.

2. **Melhoria na Navegação da Documentação:** Reorganizar a documentação para torná-la mais intuitiva e acrescentar funções de pesquisa e FAQs para acesso rápido às informações.

Estas melhorias assegurarão que os usuários tenham acesso fácil e rápido ao suporte e à documentação, o que pode melhorar significativamente a eficiência e a satisfação.

Com essa análise detalhada, buscamos proporcionar um roteiro claro e ação para nossa próxima sprint, garantindo que nosso dashboard esteja não apenas funcional, mas também seja uma experiência agradável e eficiente para todos os usuários.

## Nosso Painel Gerencial
O Painel gerencial é a parte central deste projeto, fornecendo uma visão abrangente e acessível das principais métricas e dados relevantes para a tomada de decisões estratégicas. Este painel foi projetado para oferecer uma experiência intuitiva e eficaz, permitindo aos usuários acessar facilmente informações cruciais para suas operações diárias.
### Barra lateral
A barra lateral apresenta cinco elementos principais:
- Dashboard Geral: Fornece uma visão geral das principais métricas e informações relevantes.
- Organização: Oferece acesso a dados e informações específicas sobre os VP da organização.
- Notificações: Exibe notificações importantes e atualizações relevantes do sistema.
- Análise de Dados: Permite aos usuários visualizar as análises detalhadas e explorar os dados matemáticos disponíveis.
- Sair da Conta: Opção para encerrar a sessão e sair da conta do usuário.
- Logo do Inteli: No final da barra lateral, exibimos a logo do Inteli, oferecendo reconhecimento à einstitutição de ensino.
![image](https://github.com/Inteli-College/2024-T0004-SI09-G02-DASHBOARD/assets/99206817/d62e0f75-d6c7-4d96-9760-bb2239c0bbe9)

### Área Geral da Tela
Nesta área, destacamos quatro cards componentizados:
- Respostas do GPTW e Stibla: Apresenta dados sobre as respostas dos funcionários em relação ao Great Place to Work e à pesquisa interna da empresa Stibla.
- Colocação da Empresa: Mostra a posição da empresa em comparação com outras organizações.
- Taxa de Turnover e Saúde Mental: Apresenta informações sobre a taxa de turnover relacionada à saúde mental dos funcionários.

![image](https://github.com/Inteli-College/2024-T0004-SI09-G02-DASHBOARD/assets/99206817/e49c9bcb-0743-4096-975a-a793262b8a48)

### Gráficos
- Comparação de Notas GPTW e Stibla (Interativo): Apresenta um gráfico de barras comparativo das notas ao longo dos anos entre o Great Place to Work e a pesquisa interna da empresa Stibla. É possível clicar em uma das barras para visualizar apenas os dados do GPTW ou da Stibla, além da função padrão de comparar as duas.
- Pico de Faltas Mensais (Calendário): Exibe um gráfico em formato de calendário, destacando os picos de faltas por mês.

![image](https://github.com/Inteli-College/2024-T0004-SI09-G02-DASHBOARD/assets/99206817/fa997f06-7732-4af7-97c3-5756e3c79dd9)


### Zenclub
- Sessões do Zenclub por Mês e Planta (Interativo): Apresenta um gráfico de linhas mostrando a quantidade de sessões do Zenclub por mês, dividido por planta da empresa. É possível personalizar a visualização clicando nas legendas das plantas para adicionar ou remover da comparação, permitindo uma análise mais precisa e personalizada de acordo com a preferência do usuário.

![image](https://github.com/Inteli-College/2024-T0004-SI09-G02-DASHBOARD/assets/99206817/366fd9dc-cf8c-42ac-950a-888054fdb4a8)
![image](https://github.com/Inteli-College/2024-T0004-SI09-G02-DASHBOARD/assets/99206817/777826d7-ec1c-4ae0-8608-249df970ed7c)
![image](https://github.com/Inteli-College/2024-T0004-SI09-G02-DASHBOARD/assets/99206817/302d8fa1-6683-4c52-85dd-695b36f7cb9e)

Conforme as análises detalhadas indicam, nosso dashboard já incorpora vários princípios importantes de usabilidade e design. Desde a visibilidade do status do sistema até a consistência e a prevenção de erros, esforçamo-nos para criar um ambiente digital que seja ao mesmo tempo informativo e acessível. No entanto, é na reflexão e na ação sobre as áreas que necessitam de melhorias que a verdadeira otimização ocorre. Ao abordar as questões identificadas e implementar as melhorias recomendadas, estamos comprometidos em refinar ainda mais o nosso dashboard, visando não apenas atender, mas exceder as expectativas dos usuários.
