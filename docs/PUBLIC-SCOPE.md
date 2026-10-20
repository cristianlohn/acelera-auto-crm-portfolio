# Publication scope / Escopo da publicação

## English

This is a new repository with a fresh history, not a fork or a mirror of the private CRM.

- Includes 15 Playwright specification files extracted from the active e2e directory, plus a standalone runner.
- Original test scenarios and Portuguese UI selectors are preserved. Account credentials are environment variables; contact fixtures use synthetic data and example.com emails. Cookie domains follow the configured sandbox hostname.
- The full-journey database test is excluded: it imports private database types and internal cleanup routines and requires privileged database access.
- The original app-wide database teardown and Next.js webServer build are not copied. Tests run only against a separately provisioned disposable environment. Reset/discard that environment after execution; this extraction has no database cleanup routine.
- The duplicate tests/e2e directory is not exported; the original configuration selects e2e.
- No application source, database schema, migrations, environment files, credentials, customer data, historical reports, screenshots, videos, traces, auth state or Git history is published.
- No license is granted for the commercial CRM. The public material is presented for portfolio review.

## Português

Este é um novo repositório com histórico próprio, sem fork ou espelhamento do CRM privado.

- Inclui 15 arquivos de cenários Playwright extraídos da pasta e2e ativa e uma configuração independente.
- Preserva os cenários e seletores da interface em português. Credenciais vêm de variáveis de ambiente; contatos usam dados sintéticos e e-mails example.com. Os domínios dos cookies acompanham o sandbox configurado.
- Exclui a jornada completa que importa tipos do banco e rotinas internas de limpeza e exige acesso privilegiado ao banco.
- Não copia o teardown global nem a inicialização/build Next.js do CRM. A execução exige ambiente descartável provisionado separadamente. Reinicie/descarte o ambiente após a execução; a extração não contém limpeza do banco.
- Não exporta a pasta duplicada tests/e2e: a configuração original seleciona e2e.
- Não publica código da aplicação, schema, migrations, arquivos de ambiente, credenciais, dados de clientes, relatórios históricos, capturas, vídeos, traces, sessões ou histórico Git.
- A publicação não concede licença para o CRM comercial. O material público destina-se à avaliação do portfólio.
