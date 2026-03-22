
# Feature Specification: Law Office Management Application

**Feature Branch**: `001-law-office-management`
**Created**: 2026-03-22
**Status**: Draft
**Input**: Aplicação de gerenciamento de escritório de advocacia com frontend em Next.js, backend em NestJS, banco PostgreSQL, documentação automática via Swagger, e requisitos detalhados. Sem testes automatizados (QA manual).


## User Scenarios & Testing *(mandatory)*

### User Story 1 - User Authentication and Access (Priority: P1)
As a user, I want to log in with my email/username and password so that I can securely access the system and see only the information allowed by my profile.

**Why this priority**: Authentication is the entry point for all system functionality and enforces access control.

**Independent Test**: Pode ser testado manualmente realizando login com credenciais válidas e inválidas e verificando acesso apenas ao permitido pelo perfil.

**Acceptance Scenarios**:
1. **Given** a registered user, **When** correct credentials are entered, **Then** access is granted and the dashboard is shown according to the user's profile.
2. **Given** an invalid login attempt, **When** incorrect credentials are entered, **Then** an error message is shown and access is denied.
3. **Given** a user who logs out, **When** trying to access protected pages, **Then** the system redirects to the login screen.

---

### User Story 2 - User and Profile Management (Priority: P2)
As an administrator, I want to create, edit, and deactivate users and profiles, so that I can control who accesses the system and what permissions they have.

**Why this priority**: Only authorized users should access the system, and permissions must be managed for security and compliance.

**Independent Test**: Pode ser testado manualmente criando, editando e desativando usuários e perfis, e verificando mudanças de acesso.

**Acceptance Scenarios**:
1. **Given** admin access, **When** a new user is created, **Then** the user appears in the user list and can log in.
2. **Given** an existing user, **When** the status is set to inactive, **Then** the user cannot log in.
3. **Given** a profile, **When** permissions are updated, **Then** affected users see their access change accordingly.

---

### User Story 3 - Client, Process, and Task Management (Priority: P3)
As a user, I want to manage clients, processes, and tasks, including attaching files and tracking status, so that I can organize and monitor all office activities efficiently.

**Why this priority**: Managing clients, processes, and tasks is the core business function of the law office.

**Independent Test**: Pode ser testado manualmente criando, editando e visualizando clientes, processos e tarefas, e verificando integridade dos dados e fluxo de trabalho.

**Acceptance Scenarios**:
1. **Given** a valid client, **When** a new process is created, **Then** the process is linked to the client and appears in the process list.
2. **Given** an active process, **When** a new task is created, **Then** the task is linked to the process and can be assigned to a user.
3. **Given** a task, **When** a file is attached, **Then** the file is stored and accessible from the task details.
4. **Given** a completed process, **When** a user tries to add a new task, **Then** the system prevents the action unless the process is reopened.

---

### User Story 4 - Dashboard and Reporting (Priority: P4)
As a user, I want to view a dashboard with key metrics (e.g., processes in progress, completed, tasks per process) so that I can quickly understand the office's workload and status.

**Why this priority**: The dashboard provides actionable insights and improves productivity.

**Independent Test**: Pode ser testado manualmente visualizando o dashboard e confirmando que os dados exibidos batem com o banco.

**Acceptance Scenarios**:
1. **Given** multiple processes and tasks, **When** the dashboard is loaded, **Then** the correct counts and statuses are displayed.

---

### User Story 5 - Password Recovery and Feedback (Priority: P5)
As a user, I want to recover my password via email and receive feedback notifications about my processes, so that I can maintain access and stay informed.

**Why this priority**: Password recovery and feedback are essential for usability and client communication.

**Independent Test**: Pode ser testado manualmente solicitando recuperação de senha e recebendo notificações de feedback.

**Acceptance Scenarios**:
1. **Given** a registered email, **When** password recovery is requested, **Then** a reset link is sent and a new password can be set.
2. **Given** a process update, **When** feedback is enabled, **Then** the client receives a notification via email/SMS/WhatsApp.




### Edge Cases

- What happens if a user tries to create a process without a valid client? (System must prevent and show error)
- How does the system handle duplicate emails or CPF/CNPJ during user/client registration? (System must validate and prevent duplicates)
- What if a file upload fails or exceeds size limits? (System must show error and not save the task)
- How does the system handle session expiration or token invalidation? (User must be logged out and redirected to login)
- What if a user tries to access a resource without permission? (System must deny access and show appropriate message)

## Requirements *(mandatory)*





### Functional Requirements

- **FR-001**: O sistema deve permitir apenas administradores criarem, editarem e desativarem usuários e perfis.
- **FR-002**: O sistema deve autenticar usuários via email/usuário e senha.
- **FR-003**: O sistema deve aplicar controle de acesso baseado no perfil do usuário.
- **FR-004**: O sistema deve permitir recuperação de senha via email.
- **FR-005**: O sistema deve permitir logout, encerrando a sessão do usuário.
- **FR-006**: O sistema deve fornecer dashboard com métricas de processos e tarefas.
- **FR-007**: O sistema deve permitir criar, editar e visualizar clientes, com todos os dados obrigatórios.
- **FR-008**: O sistema deve permitir criar, editar e visualizar processos, vinculando a clientes, status e resultados.
- **FR-009**: O sistema deve permitir criar, editar e visualizar tarefas, vinculando a processos, atribuindo responsáveis e anexando arquivos.
- **FR-010**: O sistema deve manter histórico de alterações das tarefas (status, anexos, responsáveis).
- **FR-011**: O sistema deve permitir criar e gerenciar assuntos, comarcas, tribunais e fases processuais.
- **FR-012**: O sistema deve enviar notificações de feedback para clientes via email/SMS/WhatsApp quando habilitado.
- **FR-013**: O sistema deve validar e impedir cadastro duplicado de usuários e clientes (email, CPF/CNPJ).
- **FR-014**: O sistema deve garantir armazenamento seguro de dados sensíveis (ex: hash de senha).
- **FR-015**: O sistema deve registrar todas operações do usuário e manter histórico para auditoria e rollback.
- **FR-016**: O sistema deve ser compatível com deploy gratuito no Render (backend) e Vercel (frontend), usando arquivos .env para configuração.
- **FR-017**: O backend deve expor documentação automática da API via Swagger.



### Entidades Principais

- **Usuário**: CPF, nome, status, telefone, OAB, senha (hash), perfil
- **Perfil**: descrição, permissões
- **Cliente**: nome, email, CPF/CNPJ, RG, sexo, profissão, endereço, contatos, indicação
- **Processo**: número, descrição, título, resultado, datas, comarca, assunto, fase, cliente, usuário responsável
- **Tarefa**: função, detalhes, data, processo, responsável, anexos, histórico
- **Anexo**: nome, formato, tamanho, data, caminho do arquivo
- **Comarca, Assunto, Fase, Indicação, Tribunal**: entidades auxiliares para classificação e organização dos processos


## Success Criteria *(mandatory)*

### Critérios de Sucesso Mensuráveis

- **SC-001**: 95% dos usuários conseguem logar e acessar o dashboard sem erro na primeira tentativa.
- **SC-002**: 100% dos cadastros de usuário, cliente, processo e tarefa são criados, editados e vinculados corretamente (validação manual).
- **SC-003**: Recuperação de senha e notificações de feedback são entregues em até 2 minutos após solicitação/ação.
- **SC-004**: Não é possível acesso não autorizado a recursos restritos (validação manual).
- **SC-005**: Sistema implantado e operacional no Render (backend) e Vercel (frontend) usando arquivos .env.
- **SC-006**: Todos os campos obrigatórios são validados e erros exibidos para entradas inválidas.
- **SC-007**: 90% dos usuários relatam facilidade de uso e compreensão do sistema em feedback.
