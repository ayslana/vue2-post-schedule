# vue2-post-schedule

Deploy disponível em: [vue2-post-schedule](https://vue2-post-schedule.vercel.app)

## Descrição

Este projeto é uma aplicação frontend que simula o agendamento de posts em redes sociais.

## Ferramentas e Tecnologias

- **Vue.js**: Versão 2.6.14
- **Vuex**: Para gerenciamento de estados
- **CSS**: Para criação de estilos e grids

## Pré-requisitos

- **Node.js**: 14.x ou 16.x
- **npm**: 6.x ou 7.x

## Estrutura de Pastas

- **assets**: Inclui arquivos de estilização CSS, além de icons e imagens usados no projeto.
- **components**: Contém os componentes criados para cada seção, além de componentes reutilizáveis.
- **views**: Contém as páginas da aplicação, que são roteadas pelo Vue Router.
- **public**: Contém arquivos estáticos que são servidos diretamente, como os .json fornecidos.
- **store**: Define a store utilizando o Vuex, que é um gerenciador de estado central para Vue.js.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/ayslana/vue2-post-schedule
   
2. Navegue até o diretório do projeto:

   ```bash
   cd vue2-post-schedule

3. Instale as dependências com npm:

   ```bash
   npm install
   
## Executando o Projeto

Para iniciar o projeto, utilize o seguinte comando:

  ```bash
  npm run serve
  ```

O aplicativo estará disponível em [http://localhost:8080](http://localhost:8080).

## Decisões Técnicas

- Vue persist para persistir os dados da store do Vuex no local storage.
- Axios para consumir os dados.
- Na store, foi optaado por não separar de forma modular, visto que a aplicação em si só se tratava de um único módulo: agendamento.
- Os estilos foram definidos diretamente dentro dos componentes, utilizando o scoped. 

## Pontos de Melhorias

Alguns requisitos não foram atendidos devido à minha limitada disponibilidade de tempo. No entanto, pretendo abordá-los em um futuro próximo.

- Melhorar a organização do CSS para futuras manutenções.
- Implementar a persistência da imagem escolhida e a conversão de base64 através de uma classe de serviço.
- Ajustes na acessibilidade do app.
- Implementar um modal de preview na listagem de agendamentos.
- Cobertura de mais de 50% da aplicação com testes unitários.

## Testes Unitários

Foram realizados testes unitários em alguns componentes do sistema. Para rodar os testes, execute o comando abaixo no terminal:

```bash
npm run test:unit





