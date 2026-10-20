# Acelera Auto CRM — Product & QA Portfolio

**[English](#english) · [Português](#português)**

[![QA suite validation](https://github.com/cristianlohn/acelera-auto-crm-portfolio/actions/workflows/qa.yml/badge.svg)](https://github.com/cristianlohn/acelera-auto-crm-portfolio/actions/workflows/qa.yml)

## English

**A functional CRM I created, with its test automation and quality pipeline.**

Acelera Auto CRM is a mobile-first SaaS product for vehicle dealerships, bringing together sales leads, vehicle inventory and dealership operations. I developed the CRM and its automated tests. This repository showcases the product and a reviewed extraction of its Playwright tests while the commercial application's source code remains private.

### Product highlights

- Sales pipeline with Kanban stages and lead follow-up.
- Vehicle inventory, search, status filters and vehicle registration.
- Team management and management dashboards.
- Responsive desktop/mobile experiences.
- Role-based navigation, subscription UI and integration management.

**Product stack:** Next.js, React, TypeScript, Tailwind CSS and Supabase/PostgreSQL. **Quality tools:** Playwright, Vitest, Testing Library, ESLint and GitHub Actions.

### Explore the work

| Material | What it demonstrates |
| --- | --- |
| [Playwright tests](e2e/) | Real project scenarios, assertions, browser interactions and responsive checks |
| [Quality strategy](docs/QUALITY-STRATEGY.md) | Original CI stages and the public validation workflow |
| [Public workflow](.github/workflows/qa.yml) | Type checking/test discovery; optional manual E2E against a sandbox |
| [Publication scope](docs/PUBLIC-SCOPE.md) | What was extracted, adapted and kept private |

### Inspect or run the tests

Requires Node.js 22+. No CRM source code is required to install, type-check or list the scenarios:

```sh
npm ci --ignore-scripts
npm run type-check
npm run test:list
```

For browser execution, provision a compatible **disposable CRM sandbox** separately, copy .env.example to .env, set E2E_BASE_URL and E2E_ALLOW_MUTATIONS=true, then run:

```sh
npx playwright install chromium
npm run test:e2e
npm run test:report
```

Some scenarios create/update leads, vehicles, sellers or demo integration keys. Never point this suite at production or customer data. Reset/discard the sandbox afterward. Real-account login scenarios are skipped without E2E_USER_EMAIL/E2E_USER_PASSWORD. Keep all reports and traces private until reviewed.

This repository does not host the CRM. E2E compatibility/results depend on the separately running application. Public CI success means test-project validation, not a passing live CRM run.

[Contact me on LinkedIn](https://www.linkedin.com/in/cristianlohn/) · [Main portfolio](https://github.com/cristianlohn)

---

## Português

**Um CRM funcional que eu criei, com sua automação de testes e esteira de qualidade.**

O Acelera Auto CRM é um SaaS mobile-first para revendas e concessionárias, reunindo leads comerciais, estoque de veículos e operação da loja. Desenvolvi o CRM e seus testes automatizados. Este repositório apresenta o produto e uma extração revisada dos testes Playwright; o código da aplicação comercial permanece privado.

### Destaques do produto

- Funil de vendas Kanban e acompanhamento de leads.
- Estoque de veículos com busca, filtros de status e cadastro.
- Gestão de equipe e painéis gerenciais.
- Experiência responsiva em desktop e dispositivos móveis.
- Navegação por perfil, interface de assinatura e gestão de integrações.

**Tecnologias do produto:** Next.js, React, TypeScript, Tailwind CSS e Supabase/PostgreSQL. **Qualidade:** Playwright, Vitest, Testing Library, ESLint e GitHub Actions.

### Conheça o trabalho

| Material | O que demonstra |
| --- | --- |
| [Testes Playwright](e2e/) | Cenários reais do projeto, asserções, interações e verificações responsivas |
| [Estratégia de qualidade](docs/QUALITY-STRATEGY.md) | Etapas da esteira original e validação pública |
| [Esteira pública](.github/workflows/qa.yml) | Tipagem/descoberta de testes e E2E manual opcional contra sandbox |
| [Escopo da publicação](docs/PUBLIC-SCOPE.md) | O que foi extraído, adaptado e mantido privado |

### Inspecionar ou executar

Requer Node.js 22+. Os comandos de instalação, tipagem e listagem acima não precisam do código do CRM. Para executar os testes no navegador, disponibilize um **sandbox descartável compatível**, copie .env.example para .env, configure E2E_BASE_URL e E2E_ALLOW_MUTATIONS=true e use os comandos de instalação do Chromium/execução/relatório acima.

Alguns cenários criam ou alteram leads, veículos, vendedores e chaves de integração de demonstração. Não utilize produção nem dados de clientes. Reinicie/descarte o sandbox após a execução. Os cenários de login real são ignorados sem E2E_USER_EMAIL/E2E_USER_PASSWORD. Relatórios e traces devem permanecer privados até revisão.

Este repositório não hospeda o CRM. A execução E2E depende da aplicação disponibilizada separadamente. Uma esteira pública verde comprova a validação do projeto de testes, não a aprovação de uma execução do CRM.

[Contato no LinkedIn](https://www.linkedin.com/in/cristianlohn/) · [Portfólio principal](https://github.com/cristianlohn)
