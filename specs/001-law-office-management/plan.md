# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]


## Technical Context

**Language/Version**: TypeScript (NestJS backend, Next.js frontend)
**Primary Dependencies**: NestJS, Next.js, Prisma ORM, Swagger (API docs), PostgreSQL, dotenv, nodemailer (ou similar para email), CI/CD (GitHub Actions), sem testes automatizados
**Storage**: PostgreSQL
**Testing**: Manual QA apenas (conforme constituição, sem testes automatizados)
**Target Platform**: Linux server (backend), Vercel (frontend)
**Project Type**: Web application (backend REST API + frontend SPA/SSR)
**Performance Goals**: Resposta <500ms para operações comuns, escalável para 100 usuários simultâneos
**Constraints**: Compatível com Render (backend) e Vercel (frontend), uso de .env para configuração, documentação automática via Swagger
**Scale/Scope**: Escritório de advocacia de pequeno/médio porte, até 10 usuários simultâneos, até 10 mil processos

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

[Gates determined based on constitution file]

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

tests/
ios/ or android/

### Source Code (repository root)

```text
backend/
├── src/
│   ├── modules/
│   ├── middleware/
│   ├── prisma/
│   ├── main.ts
│   └── app.module.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── package.json
├── render.yaml
├── .env.example

Application/
└── frontend/
    └── integrador/
        ├── components/
        ├── pages/
        ├── store/
        ├── assets/
        ├── static/
        ├── package.json
        ├── nuxt.config.js (remover, trocar por next.config.js se migrar para Next.js)
        ├── jsconfig.json
        └── .env.example
```

**Structure Decision**: Utilizar backend/ para NestJS (API REST, Prisma, Swagger), Application/frontend/integrador/ para Next.js (SPA/SSR), ambos com .env para configuração. Remover menções a Nuxt.js e garantir que o frontend use Next.js.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
