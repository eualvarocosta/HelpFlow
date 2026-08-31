# HelpFlow

Landing page de uma solução para gestão de chamados e atendimentos, focada em melhorar a organização, priorização e comunicação entre usuários e equipes de suporte.

## Sobre o projeto

O HelpFlow foi idealizado como uma plataforma de apoio para empresas e equipes que precisam centralizar solicitações, controlar demandas e reduzir o tempo de resposta em problemas simples e complexos. A página apresenta a proposta da solução, seus benefícios e um formulário de contato para captação de leads ou interesse do cliente.

## Objetivo

- Mostrar a proposta de valor da solução HelpFlow;
- Destacar a importância de um bom gerenciamento de chamados;
- Facilitar o contato inicial com potenciais clientes ou usuários;
- Apresentar a marca e a identidade visual da plataforma.

## Tecnologias utilizadas

- Angular 22
- TypeScript
- SCSS
- RxJS
- Angular Router
- Angular SSR
- Node.js

## Estrutura do projeto

```text
HelpFlow/
├── public/                 # Arquivos públicos e imagens estáticas
├── src/
│   ├── app/
│   │   ├── components/     # Componentes da landing page
│   │   │   ├── btn-primary/
│   │   │   ├── form/
│   │   │   ├── header/
│   │   │   └── home/
│   │   ├── interfaces/
│   │   ├── services/
│   │   ├── app.routes.ts
│   │   ├── app.ts
│   │   ├── app.html
│   │   └── app.scss
│   ├── styles.scss
│   ├── main.ts
│   ├── main.server.ts
│   └── server.ts
├── angular.json
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

## Funcionalidades da landing page

- Header com identidade visual da marca;
- Hero section com destaque para o produto;
- Mensagem de valor e proposta da solução;
- Apresentação de benefícios do HelpFlow;
- Botão de chamada para ação;
- Formulário de contato para captação de leads;
- Layout responsivo e visual moderno.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js 18 ou superior
- npm
- Angular CLI (opcional, mas útil para comandos no projeto)

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd HelpFlow
npm install
```

## Execução local

Inicie o projeto em modo de desenvolvimento:

```bash
npm start
```

ou

```bash
ng serve
```

A aplicação será aberta em:

```text
http://localhost:4200/
```

## Build de produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

Os arquivos gerados ficam na pasta `dist/`.

## Testes

Execute os testes do projeto com:

```bash
npm test
```

## Observações

Este projeto está em fase inicial de desenvolvimento, com foco em apresentação da solução e validação da proposta comercial. O próximo passo pode incluir integração com backend, autenticação, painel administrativo e fluxo de gestão de chamados.

## Licença

MIT — sinta-se livre para usar e modificar.
