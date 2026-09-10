# HelpFlow

Landing page de uma solução para gestão de chamados e atendimentos, focada em melhorar a organização, priorização e comunicação entre usuários e equipes de suporte.

## ✨ Funcionalidades

🎯 Apresentação clara da proposta de valor e identidade visual da plataforma  
📌 Destaque para os benefícios da centralização e redução do tempo de resposta  
🚀 Seção Hero interativa orientada à conversão de usuários  
✉️ Formulário de contato para captação de leads e potenciais clientes  
🔘 Botões interativos de chamada para ação (*Call to Action*)  
📱 Layout responsivo adaptado para múltiplos dispositivos  
⚡ Renderização rápida e otimizada via Angular SSR  

## 🛠️ Tecnologias

| Tecnologia | Uso |
| :--- | :--- |
| Angular 22 | Framework principal para construção da interface |
| TypeScript | Desenvolvimento com tipagem estática e segurança |
| SCSS | Estilização avançada e modular dos componentes |
| RxJS | Manipulação e gerenciamento de fluxos reativos |
| Angular Router | Navegação e roteamento entre visões |
| Angular SSR / Node.js | Renderização do lado do servidor para SEO e performance |

## 📁 Estrutura do projeto

```text
HelpFlow/
├── public/                 # Arquivos públicos e imagens estáticas
├── src/
│   ├── app/
│   │   ├── components/     # Componentes da landing page
│   │   │   ├── btn-primary/# Botão customizado de ação principal
│   │   │   ├── form/       # Formulário de contato para leads
│   │   │   ├── header/     # Cabeçalho com navegação e marca
│   │   │   └── home/       # Seção principal/Hero da landing page
│   │   ├── interfaces/     # Tipagens e modelos de dados
│   │   ├── services/       # Serviços para integração de dados
│   │   ├── app.routes.ts   # Configuração de rotas da aplicação
│   │   ├── app.ts          # Lógica do componente raiz
│   │   ├── app.html        # Estrutura HTML principal
│   │   └── app.scss        # Estilos globais e componentes raiz
│   ├── styles.scss         # Variáveis globais e estilos base
│   ├── main.ts             # Ponto de entrada da aplicação cliente
│   ├── main.server.ts      # Ponto de entrada da renderização SSR
│   └── server.ts           # Servidor Node.js para suporte ao SSR
├── angular.json            # Configurações do Angular CLI
├── package.json
├── tsconfig.json
└── README.md

```

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js instalado (versão 18 ou superior)
- Git instalado
- Angular CLI instalado (npm install -g @angular/cli) (opcional)

### Passo a passo

**1. Clonar o repositório:**

```Bash
git clone https://github.com/seu-usuario/HelpFlow.git
cd HelpFlow
```

**2. Instalar as dependências:**

```Bash
npm install
```

**3. Iniciar o servidor local:**

```Bash
npm start
```
ou via Angular CLI:

```Bash
ng serve
```

Acesse http://localhost:4200 no navegador. ✅

---

## 🛠️ Otimização e Build de Produção
### Para gerar a versão otimizada do projeto para produção:

```Bash
npm run build
```

Os arquivos finais compilados serão gerados dentro do diretório `dist/`.

## 🧪 Testes

### Para executar os testes unitários da aplicação:

```Bash
npm test
```
---

## 📌 Observações e Próximos Passos

### O projeto encontra-se atualmente em fase inicial de desenvolvimento, com foco na apresentação da solução e validação da proposta comercial. 
### As próximas melhorias planejadas incluem:

- Integração com backend para envio real dos dados do formulário;
- Autenticação de usuários e equipes de atendimento;
- Painel administrativo interativo para gestão e fluxo de chamados.

---

## 📝 Licença
MIT — sinta-se livre para usar e modificar.
