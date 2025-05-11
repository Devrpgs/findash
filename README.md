# FinDash - Dashboard Financeiro

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://semver.org)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Build Status](https://img.shields.io/badge/build-passing-success.svg)]()
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

FinDash é um dashboard financeiro completo para gerenciamento e análise de finanças empresariais. A aplicação oferece uma visão abrangente dos indicadores financeiros, com ferramentas para monitoramento de receitas, despesas, orçamentos, transações, investimentos, relatórios e clientes.

## Demonstração

Veja o FinDash em ação: [Demo ao vivo](https://findash-demo.vercel.app)

Credenciais para teste:
- **Usuário**: demo@findash.com
- **Senha**: demo123

## Tecnologias Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Gráficos**: Recharts
- **Ícones**: Lucide React
- **Formatação de Data**: date-fns

## Requisitos do Sistema

### Para Desenvolvimento
- Node.js 18.0 ou superior
- npm 9.0 ou superior
- 4GB de RAM (mínimo)
- Navegadores modernos (Chrome, Firefox, Safari, Edge)

### Para Produção
- Servidor com suporte a Node.js
- 2GB de RAM (mínimo recomendado)
- Banco de dados PostgreSQL 14+ (opcional, para armazenamento persistente)

## Instalação e Execução

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/seu-usuario/financial-dashboard.git
   cd financial-dashboard
   \`\`\`

2. Instale as dependências:
   \`\`\`bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   \`\`\`

3. Execute o servidor de desenvolvimento:
   \`\`\`bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   \`\`\`

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

5. Capture screenshots das principais telas para documentação:
   \`\`\`bash
   # Crie a pasta para screenshots se ainda não existir
   mkdir -p public/screenshots
   \`\`\`

## Funcionalidades

### Dashboard Principal

- **Visão Geral Financeira**:
  - Cards com métricas principais (Receita Total, Despesas, Lucro Líquido, Margem de Lucro)
  - Gráfico de Fluxo de Caixa
  - Gráfico de Distribuição de Despesas
  - Tabela de Transações Recentes

- **Navegação por Abas**:
  - Visão Geral
  - Receitas
  - Despesas
  - Orçamentos

- **Filtros e Exportação**:
  - Seleção de período (diário, semanal, mensal, trimestral, anual)
  - Exportação de dados

### Receitas

- **Métricas de Receitas**:
  - Receita Total
  - Receita Recorrente
  - Receita por Cliente
  - Taxa de Crescimento

- **Visualizações**:
  - Gráfico de Evolução de Receitas
  - Gráfico de Fontes de Receita
  - Tabela de Histórico de Receitas

- **Funcionalidades**:
  - Adição de novas receitas
  - Filtros por período e categoria
  - Exportação de dados

### Despesas

- **Métricas de Despesas**:
  - Despesas Totais
  - Despesas Fixas
  - Despesas Variáveis
  - Taxa de Variação

- **Visualizações**:
  - Gráfico de Evolução de Despesas
  - Gráfico de Distribuição por Categoria
  - Tabela de Histórico de Despesas

- **Funcionalidades**:
  - Adição de novas despesas
  - Filtros por período e categoria
  - Exportação de dados

### Orçamentos

- **Métricas de Orçamentos**:
  - Orçamento Total
  - Valor Utilizado
  - Valor Disponível
  - Variação Orçamentária

- **Visualizações**:
  - Gráfico de Orçado vs. Realizado
  - Gráfico de Progresso do Orçamento
  - Tabela de Orçamentos Ativos

- **Funcionalidades**:
  - Criação de novos orçamentos
  - Monitoramento de progresso
  - Alertas de orçamento excedido

### Transações

- **Métricas de Transações**:
  - Total de Transações
  - Entradas
  - Saídas
  - Transações Pendentes

- **Visualizações**:
  - Tabela completa de transações
  - Filtros avançados
  - Paginação

- **Funcionalidades**:
  - Adição de novas transações
  - Busca e filtragem
  - Exportação de dados

### Investimentos

- **Métricas de Investimentos**:
  - Valor Total Investido
  - Retorno Total
  - Retorno Mensal
  - Rentabilidade Anual

- **Visualizações**:
  - Gráfico de Desempenho dos Investimentos
  - Gráfico de Alocação de Ativos
  - Tabela de Portfólio de Investimentos

- **Funcionalidades**:
  - Adição de novos investimentos
  - Análise de desempenho
  - Monitoramento de retorno

### Relatórios

- **Métricas de Relatórios**:
  - Total de Relatórios
  - Relatórios Recentes
  - Relatórios Agendados
  - Modelos Disponíveis

- **Visualizações**:
  - Tabela de Relatórios Recentes
  - Grid de Modelos de Relatórios
  - Tabela de Relatórios Agendados

- **Funcionalidades**:
  - Geração de novos relatórios
  - Agendamento de relatórios periódicos
  - Exportação em múltiplos formatos (PDF, Excel, CSV)
  - Favoritos e compartilhamento

### Clientes

- **Métricas de Clientes**:
  - Total de Clientes
  - Novos Clientes
  - Taxa de Retenção
  - Receita por Cliente

- **Visualizações**:
  - Gráfico de Receita por Cliente
  - Gráfico de Distribuição de Clientes
  - Tabela completa de clientes

- **Funcionalidades**:
  - Adição de novos clientes
  - Busca e filtragem
  - Segmentação de clientes

### Configurações

- **Perfil**:
  - Informações pessoais
  - Foto de perfil
  - Biografia

- **Conta**:
  - Segurança (senha, autenticação de dois fatores)
  - Preferências de email
  - Sessões ativas

- **Notificações**:
  - Alertas financeiros
  - Notificações do sistema
  - Canais de notificação

- **Faturamento**:
  - Informações de plano
  - Métodos de pagamento
  - Histórico de faturas

- **Sistema**:
  - Idioma
  - Fuso horário
  - Formato de data
  - Moeda
  - Tema (claro/escuro)
  - Categorias e tags

## Screenshots

### Dashboard Principal
![Dashboard Principal](/public/screenshots/dashboard-principal.png)
*Visão geral do dashboard com métricas principais, gráficos de fluxo de caixa e distribuição de despesas.*

### Receitas
![Página de Receitas](/public/screenshots/receitas.png)
*Página de gerenciamento de receitas com métricas, gráficos e tabela de histórico.*

### Despesas
![Página de Despesas](/public/screenshots/despesas.png)
*Análise detalhada de despesas com distribuição por categorias e histórico.*

### Orçamentos
![Página de Orçamentos](/public/screenshots/orcamentos.png)
*Acompanhamento de orçamentos com comparativo entre valores planejados e realizados.*

### Transações
![Página de Transações](/public/screenshots/transacoes.png)
*Registro completo de transações financeiras com filtros avançados.*

### Investimentos
![Página de Investimentos](/public/screenshots/investimentos.png)
*Monitoramento de investimentos com análise de desempenho e alocação de ativos.*

### Relatórios
![Página de Relatórios](/public/screenshots/relatorios.png)
*Geração e visualização de relatórios financeiros personalizados.*

### Clientes
![Página de Clientes](/public/screenshots/clientes.png)
*Gerenciamento de clientes com análise de receita e segmentação.*

### Configurações
![Página de Configurações](/public/screenshots/configuracoes.png)
*Personalização de preferências do sistema e da conta de usuário.*

### Diálogos de Adição
![Diálogo de Adição de Receita](/public/screenshots/dialogo-receita.png)
*Interface para adição de novas receitas ao sistema.*

![Diálogo de Adição de Relatório](/public/screenshots/dialogo-relatorio.png)
*Interface para geração de novos relatórios personalizados.*

## Componentes de Diálogo

O sistema inclui diálogos modais para adição de novos itens:

- **AddRevenueDialog**: Adicionar novas receitas
- **AddExpenseDialog**: Adicionar novas despesas
- **AddBudgetDialog**: Criar novos orçamentos
- **AddTransactionDialog**: Registrar novas transações
- **AddInvestmentDialog**: Adicionar novos investimentos
- **AddReportDialog**: Gerar novos relatórios
- **AddClientDialog**: Cadastrar novos clientes

## Estrutura do Projeto

\`\`\`
financial-dashboard/
├── app/                      # Rotas da aplicação (Next.js App Router)
│   ├── layout.tsx            # Layout principal
│   ├── page.tsx              # Página inicial (Dashboard)
│   ├── receitas/             # Página de Receitas
│   ├── despesas/             # Página de Despesas
│   ├── orcamentos/           # Página de Orçamentos
│   ├── transacoes/           # Página de Transações
│   ├── investimentos/        # Página de Investimentos
│   ├── relatorios/           # Página de Relatórios
│   ├── clientes/             # Página de Clientes
│   └── configuracoes/        # Página de Configurações
├── components/               # Componentes reutilizáveis
│   ├── cards/                # Cards de métricas
│   ├── charts/               # Componentes de gráficos
│   ├── dialogs/              # Diálogos modais
│   ├── pages/                # Conteúdo específico de páginas
│   ├── tables/               # Tabelas de dados
│   ├── ui/                   # Componentes de UI (shadcn)
│   ├── dashboard.tsx         # Componente principal do dashboard
│   ├── dashboard-header.tsx  # Cabeçalho do dashboard
│   ├── dashboard-sidebar.tsx # Barra lateral de navegação
│   └── dashboard-shell.tsx   # Shell para páginas internas
└── public/                   # Arquivos estáticos
\`\`\`

## Documentação da API

O FinDash inclui uma API REST para integração com outros sistemas:

### Endpoints Principais

- `GET /api/dashboard` - Obtém dados resumidos do dashboard
- `GET /api/transactions` - Lista transações com paginação
- `POST /api/reports/generate` - Gera um novo relatório

A documentação completa da API está disponível em [docs/api.md](docs/api.md).

## Exemplos de Uso

### Gerando um Relatório Personalizado

\`\`\`typescript
// Exemplo de como usar a API para gerar um relatório
import { generateReport } from '@/lib/reports';

const report = await generateReport({
  type: 'financial',
  period: {
    start: new Date('2025-01-01'),
    end: new Date('2025-03-31')
  },
  format: 'pdf'
});

console.log(`Relatório gerado: ${report.url}`);
\`\`\`

### Integrando com Sistemas Externos

\`\`\`typescript
// Exemplo de como importar transações de um sistema externo
import { importTransactions } from '@/lib/transactions';

const result = await importTransactions({
  source: 'csv',
  file: csvFile,
  mapping: {
    date: 'Data',
    description: 'Descrição',
    amount: 'Valor',
    category: 'Categoria'
  }
});

console.log(`${result.imported} transações importadas com sucesso`);
\`\`\`

## Contribuindo

Contribuições são sempre bem-vindas!

### Processo de Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código

- Use TypeScript para todos os novos arquivos
- Siga o estilo de código existente
- Mantenha os componentes pequenos e focados
- Escreva testes para novas funcionalidades
- Documente APIs e funções complexas

Veja [CONTRIBUTING.md](CONTRIBUTING.md) para mais detalhes.

## Código de Conduta

Este projeto adota o [Código de Conduta do Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).
Ao participar, espera-se que você respeite este código.

## Roadmap

### Q2 2025
- [ ] Implementação de autenticação e autorização
- [ ] Integração com APIs bancárias
- [ ] Versão mobile responsiva

### Q3 2025
- [ ] Análise preditiva com IA
- [ ] Notificações em tempo real
- [ ] Dashboards personalizáveis

### Q4 2025
- [ ] Integração com sistemas contábeis
- [ ] Exportação avançada de relatórios
- [ ] Marketplace de plugins

## Melhorias Futuras

- **Autenticação e Autorização**: Implementar sistema de login e controle de acesso
- **Integração com APIs Financeiras**: Conectar com serviços bancários e financeiros
- **Análise Preditiva**: Adicionar previsões financeiras baseadas em IA
- **Aplicativo Mobile**: Versão responsiva para dispositivos móveis
- **Notificações em Tempo Real**: Alertas instantâneos para eventos importantes
- **Exportação Avançada**: Mais opções de formatos e personalização
- **Dashboards Personalizáveis**: Permitir que usuários personalizem seus painéis
- **Integração com Contabilidade**: Conexão com sistemas contábeis

## FAQ (Perguntas Frequentes)

### O FinDash é gratuito?
Sim, o FinDash é um projeto de código aberto e gratuito para uso.

### Posso usar o FinDash em produção?
Sim, mas recomendamos revisar as configurações de segurança antes de usar em ambiente de produção.

### Como posso reportar um bug?
Abra uma issue no GitHub descrevendo o problema, passos para reproduzir e ambiente.

### O FinDash suporta múltiplos idiomas?
Atualmente suportamos Português e Inglês, com planos para adicionar mais idiomas.

### É possível personalizar os gráficos e relatórios?
Sim, todos os gráficos e relatórios podem ser personalizados através das configurações ou diretamente no código.

### O FinDash funciona offline?
Não, o FinDash requer conexão com a internet para funcionar corretamente.

## Troubleshooting

### Problemas Comuns

#### Os gráficos não estão renderizando
Verifique se você está usando um navegador moderno e se o JavaScript está habilitado. Se o problema persistir, limpe o cache do navegador.

#### Erro "Failed to fetch" ao gerar relatórios
Este erro geralmente ocorre quando o servidor de API está inacessível. Verifique sua conexão com a internet e se o servidor está em execução.

#### Lentidão ao carregar muitas transações
Para melhorar o desempenho com grandes volumes de dados:
1. Utilize a paginação (limite de 100 itens por página)
2. Aplique filtros para reduzir o conjunto de dados
3. Considere aumentar os recursos do servidor

## Segurança

### Relatando Vulnerabilidades

Se você descobrir uma vulnerabilidade de segurança no FinDash, envie um e-mail para security@findash.com em vez de abrir uma issue pública.

### Práticas Recomendadas

Ao implantar o FinDash em produção:
- Use HTTPS para todas as comunicações
- Configure corretamente as variáveis de ambiente
- Implemente autenticação e autorização adequadas
- Mantenha todas as dependências atualizadas

## Métricas e Analytics

O FinDash inclui integração opcional com ferramentas de analytics:

- **Uso Anônimo**: Coleta dados anônimos de uso para melhorar o produto (pode ser desativado)
- **Telemetria de Erros**: Rastreia erros para identificar problemas (pode ser desativado)
- **Analytics Personalizados**: Suporte para Google Analytics, Plausible, ou Fathom

Configure as preferências de analytics em `config/analytics.ts`.

## Changelog

### v1.0.0 (Maio 2025)
- Lançamento inicial
- Dashboard completo com 8 módulos principais
- Suporte a relatórios personalizados

### v0.9.0 (Abril 2025)
- Versão beta pública
- Implementação de todos os gráficos e visualizações
- Correções de bugs e melhorias de desempenho

### v0.5.0 (Fevereiro 2025)
- Versão alpha
- Implementação inicial do dashboard e navegação

## Agradecimentos

- [Recharts](https://recharts.org) - Biblioteca de gráficos utilizada
- [shadcn/ui](https://ui.shadcn.com) - Componentes de UI
- [Lucide Icons](https://lucide.dev) - Ícones utilizados no projeto
- [Next.js](https://nextjs.org) - Framework React utilizado
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS utilizado
- Todos os contribuidores que ajudaram a tornar este projeto possível

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Desenvolvido com ❤️ pela Equipe DevPorto
