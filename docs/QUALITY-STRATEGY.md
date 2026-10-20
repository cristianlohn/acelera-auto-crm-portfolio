# Quality strategy / Estratégia de qualidade

## English

The private project combines TypeScript checks, ESLint, Vitest unit/integration tests and coverage, a production build, then Playwright E2E tests in GitHub Actions. The original runner covers Desktop Chrome and a Pixel 5 viewport, with one retry in CI and failure evidence capture.

The public repository validates only this extracted test project: type checking and test discovery on pushes and pull requests. A green QA suite validation run is not evidence that the CRM E2E scenarios passed. Browser execution is a separate manual job requiring an isolated sandbox and optional dedicated test credentials.

| Area | Public test files |
| --- | --- |
| Authentication and demo sessions | auth, demo-mode, help-and-auth-redirect |
| Sales funnel | kanban-leads, leads-kanban |
| Vehicle inventory | inventory-filter, vehicle-creation-and-refresh |
| Team management | team-management, team-page |
| Access control UI | rbac-navigation |
| Subscription UI | subscription-gating |
| Integrations UI | api-keys-management |
| Management cockpit | manager-cockpit |
| Responsive layouts | responsive-overflow, dealership-notebook-viewports |

These are UI/demo-mode tests; they do not, by themselves, prove backend authorization, tenant isolation or overall security. Test names describe intended checks, not a claim of successful execution. No historical pass rate, coverage percentage or current production result is asserted.

## Português

No projeto privado, a esteira combina verificação TypeScript, ESLint, testes unitários/de integração e cobertura com Vitest, build de produção e testes E2E com Playwright no GitHub Actions. A configuração original contempla Desktop Chrome e viewport Pixel 5, com uma repetição em CI e captura de evidências de falha.

O repositório público valida apenas o projeto de testes extraído: tipagem e descoberta de testes em pushes e pull requests. Uma execução verde de QA suite validation não comprova aprovação dos cenários E2E do CRM. A execução no navegador é uma etapa manual separada e exige sandbox isolado e, quando necessário, credenciais exclusivas de teste.

Os cenários públicos abrangem autenticação/demo, funil de vendas, estoque, equipe, interface de permissões e assinatura, integrações, cockpit do gestor e responsividade. A tabela acima relaciona cada área aos arquivos correspondentes.

São testes de interface/modo demonstração: isoladamente, não comprovam autorização no backend, isolamento de lojas ou segurança global. Os nomes descrevem verificações pretendidas, sem afirmar sucesso de execução. Não são apresentados percentuais históricos de aprovação/cobertura nem resultados atuais de produção.
