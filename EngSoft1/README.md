## Requisitos funcionais

| ID  | REQUISITO FUNCIONAL  | TIPO DE USUÁRIO DO SISTEMA  | DESCRIÇÃO DO REQUISITO FUNCIONA  |
|---|---|---|---|
| RF01  | Manter Usuário  | Administrador  | O sistema deverá permitir que somente o administrador cadastre usuários na plataforma. Os dados necessários são: nome, cpf, oab(se advogado), email, fone, perfil (ex: perfil advogado, estagiário, administrador), senha e confirmação de senha. Ao gravar o sistema deverá registrar a data do cadastro e adicionar um campo de status(ativo/inativo).|
|  RF02 |  Manter Perfil | Administrador  | Cada perfil tem regras de permissões(o que pode ou não ser acessado). É alterado pelo administrador do sistema.  |
| RF03  | Efetuar Login  | Usuário  | Para acessar o sistema o usuário deverá informar seu email ou username e senha. As informações serão apresentadas de acordo com o perfil. Deverão ser registradas todas as operações dos usuários do sistema, mantendo histórico de logs na plataforma, e permitindo voltar à versão anterior.|
|RF04 |Esqueci minha senha|Usuário|Caso o usuário esqueça a senha poderá solicitar o cadastro de uma nova senha através da tela de login. O usuário deve informar o e-mail, caso exista no banco de dados do sistema, deve ser feito link via email para o cadastro da nova senha. O link irá gerar uma tela onde ele poderá colocar a senha e confirmar a senha.|
|RF05|Sair do sistema|Usuário|Permitir usuário deslogar do sistema, impossibilitando qualquer acesso às funcionalidades até que um novo login seja realizado. |
|RF06|Tela inicial|Perfil|Deve conter um menu possibilitando navegar através das “telas” existentes no sistema. Terá um dashboard onde será possível visualizar as informações referente aos processos (Quantidade de processos concluídos, em andamento…) e também referente às tarefas relacionadas a cada processo.|
|RF07|Manter tarefa|Usuário|Para criar uma nova tarefa deve ser necessário existir um processo criado, esse processo pode estar com seu status como por exemplo, novo em andamento ou finalizado. Processos já finalizados não será possível realizar a criação de uma nova tarefa, somente em casos de processos reabertos. Cada tarefa poderá conter uma descrição contendo informações úteis, quem vai trabalhar na tarefa, responsável pela tarefa, função que deverá ser efetuada (Vai depender da fase que consta o processo). Também vai possibilitar anexar arquivos a cada tarefa. Ao efetuar alteração na tarefa, deve ser registrado os campos modificados em uma aba separada, porém na mesma tela. Essas modificações vão ser por tarefas, mantendo um histórico dos documentos anexados, alteração de status e data. Também deve registrar a data e hora da modificação e o usuário que efetuou.|
|RF08|Manter cliente|Usuário|Tipo de pessoa (Física ou jurídica), CPF/CNPJ, nome, rg, data de nascimento, profissão, sexo, nacionalidade, celular, telefone, email, cep, uf, código do município, endereço, bairro, número e origem (Indicação cliente, facebook, instagram, anuncio…)|
|RF09|Manter processo|Usuário|Para criar um novo processo o usuário deve possuir OAB ou acesso liberado através do seu perfil. Cada processo possui um número identificador gerado automaticamente pelo sistema, número do processo-cnpj (0015703-84.2017.8.16.0185), título, cliente. Data de criação gerada automaticamente pelo sistema e a data de conclusão. Resultado do processo (Processo ganho ou perdido).|
|RF10|Manter assuntos/tags do processo|Usuário|Criação de tags para identificar o assunto do processo (disputas de propriedades, cobrança de aluguel, despejos, entre outros tipos de tags que serão criadas pelo usuário), cada processo deve possuir um ou mais advogados e o cliente vinculado ao processo. |
|RF11|Manter comarca e tribunal do processo|Usuário|Criação da comarca (local em que o juiz irá exercer sua jurisdição), vara e tribunal (STF, STJ, JFAL…).|
|RF12|Manter fase do processo|Usuário|Fase do processo (Consultoria, negociação, judicial, recursal e, execução/cobrança)|
|RF13|Feedback ao cliente|Usuário|Disponibilizar checkbox para envio de e-mail ao cliente referente ao processo criado.|

## Requisitos não funcionais

| ID  | REQUISITO NÃO FUNCIONAL  | DESCRIÇÃO DO REQUISITO NÃO FUNCIONAL  |
|---|---|---|
| RNF01  | Segurança  | O sistema deve garantir a segurança dos dados pessoais dos usuários, utilizando medidas como criptografia de senhas, restrição de acesso a informações sensíveis apenas para usuários autorizados e proteção contra ataques externos. |
| RNF02  | Desempenho  | O sistema deve ter um desempenho adequado, garantindo tempos de resposta rápidos para as operações realizadas pelos usuários. Isso inclui a capacidade de lidar com um grande número de usuários simultaneamente sem degradar o desempenho. |
| RNF03  | Confiabilidade  | O sistema deve ser confiável e estar disponível para uso da maior parte do tempo. Deve minimizar o tempo de inatividade não planejado e possuir um mecanismo de backup para evitar a perda de dados em caso de falhas. |
| RNF04  | Usabilidade  | O sistema deve ser intuitivo e fácil de usar, com uma interface amigável para os usuários. As telas e funcionalidades devem ser organizadas de forma clara e coerente, facilitando a navegação e reduzindo a curva de aprendizado. |
| RNF05  | Requisitos de desenvolvimento/ Implementação  |Linguagem de programação: Javascript usando Node JS e NPM. Banco de dados: Postgres. |
| RNF06  | Integração  | O sistema deve ter a capacidade de se integrar com outros sistemas ou serviços externos, como serviços de e-mail para envio de notificações aos usuários. |
| RNF07  | Compatibilidade  | O sistema deve ser compatível com os principais navegadores web e dispositivos utilizados pelos usuários, garantindo uma experiência consistente em diferentes plataformas. |
| RNF08  | Disponibilidade  | O sistema deve estar disponível para acesso dos usuários durante a maior parte do tempo, com um tempo de inatividade planejado mínimo para manutenção e atualizações. |
| RNF09  | Conformidade  | O sistema deve estar em conformidade com as leis e regulamentos de proteção de dados e privacidade, garantindo que as informações dos usuários sejam tratadas de acordo com as normas aplicáveis. |

## Diagrama caso de uso

![Diagrama caso de uso](https://github.com/jeangondorek/Prog2Project/assets/38532877/1c803bdb-2a19-40e9-a042-20c99b06c1a6)


### Descrição do diagrama:

- Caso de Uso: Manter de Usuário
  - Ator principal: Administrador
  - Descrição: O administrador faz o cadastro e alteração usuários no sistema, fornecendo informações como nome, CPF, OAB (se advogado), e-mail, telefone, perfil, senha e confirmação de senha.

- Caso de Uso: Manter de Perfil
  - Ator principal: Administrador
  - Descrição: O administrador define os perfis de acesso no sistema, com regras de permissões específicas para cada perfil, como administrador, advogado e controller. Cada perfil terá funcionalidades pré-definidas.

- Caso de Uso: Login no Sistema
  - Ator principal: Usuário, Administrador
  - Descrição: O usuário realiza o login no sistema informando seu e-mail/username e senha. O sistema apresenta as informações de acordo com o perfil do usuário. Todas as operações dos usuários são registradas, mantendo um histórico de logs e permitindo voltar a versões anteriores.

- Caso de Uso: Recuperação de Senha
  - Ator principal: Usuário, Administrador
  - Descrição: Caso o usuário esqueça sua senha, ele pode solicitar o cadastro de uma nova senha por meio da tela de login. Será enviado um link por e-mail para cadastrar a nova senha.

- Caso de Uso: Logout do Sistema
  - Ator principal: Usuário, Administrador
  - Descrição: O usuário realiza o logout do sistema, encerrando a sessão e impossibilitando qualquer acesso às funcionalidades até que um novo login seja realizado.

- Caso de Uso: Tela Inicial
  - Ator principal: Usuário
  - Descrição: O usuário tem acesso a uma tela inicial com um menu que permite navegar pelas diferentes telas do sistema. A tela inicial exibe um dashboard com informações sobre os processos, como a quantidade de processos concluídos e em andamento, além de tarefas relacionadas a cada processo.

- Caso de Uso: Manter Tarefa
  - Ator principal: Usuário
  - Descrição: O usuário cria e atualiza as tarefas relacionadas a um processo existente. A tarefa pode conter uma descrição, informações úteis, responsável pela tarefa e função a ser efetuada, dependendo da fase do processo. É possível anexar arquivos à tarefa. As modificações na tarefa são registradas, mantendo um histórico dos documentos anexados, alteração de status, data e usuário responsável.

- Caso de Uso: Manter Cliente
  - Ator principal: Usuário
  - Descrição: O usuário cadastra e atualiza os clientes, informando tipo de pessoa (física ou jurídica), CPF/CNPJ, nome, RG, data de nascimento, profissão, sexo, nacionalidade, celular, telefone, e-mail, CEP, UF, código do município, endereço, bairro, número e origem do cliente.

- Caso de Uso: Manter Processo
  - Ator principal: Usuário
  - Descrição: O usuário cadastra e atualiza os processos no sistema, fornecendo informações como o número do processo ou CNPJ relacionado, descrição detalhada do processo, título ou assunto do caso, cliente envolvido e data de criação do processo. O sistema armazena essas informações e associa o processo ao respectivo cliente. Isso permite que o escritório de advocacia mantenha um registro organizado de todos os processos em andamento.

- Caso de Uso: Manter anexos
  - Ator principal: Usuário
  - Descrição: O usuário faz o gerenciamento de documentos relacionados aos processos, como anexar documentos, categorizar por tipo, adicionar descrições, definir permissões de acesso, entre outros.

- Caso de Uso: Feedback
  - Ator principal: Usuário
  - Descrição: O usuário tem acesso a um checkbox para envio de status, atualizações quanto ao processo via email/sms/whatsapp para o cliente.
 
---

## Prototipação

- Descrição:
  - Bem-vindo ao projeto de prototipação do nosso sistema de advocacia! Abaixo disponibilizamos as principais telas utilizadas no projeto, com o objetivo de criar uma experiência minimalista e de fácil usabilidade, concentrando-se principalmente na interface do usuário (UI) e na experiência do usuário (UX).
  - O principal objetivo ao criar a prototipação das telas, foi desenvolver um sistema intuitivo e eficiente, para isso utilizamos uma interface limpa e minimalista que proporciona uma experiência mais agradável, reduzindo o tempo para conclusão das tarefas realizadas no sistema e por consequência sua complexidade. 
- Segue [link](https://www.figma.com/file/gBygMICpClCvWtWF2LVMgA/Untitled?type=design&node-id=0%3A1&mode=design&t=NKJlGlyCqvuTzD2D-1) para visitar o projeto através do figma e acompanhar a criação das demais telas.
  
![image](https://github.com/jeangondorek/Prog2Project/assets/80592079/66501ce1-2e9e-4486-8cb0-75031f545086)

![image](https://github.com/jeangondorek/Prog2Project/assets/80592079/397c5307-0c6c-4848-8a40-7cfa0de360bb)

![image](https://github.com/jeangondorek/Prog2Project/assets/80592079/e038c779-8ffb-403a-914d-9a524f2208ec)

![image](https://github.com/jeangondorek/Prog2Project/assets/80592079/41f19228-63ab-4281-9871-0f05ff2c76d0)

![image](https://github.com/jeangondorek/Prog2Project/assets/80592079/4f9e79e7-a0dd-45fd-b9ad-c4e007951c48)
