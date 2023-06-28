# Engenharia de software

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
| RNF05  | Manutenibilidade  | O sistema deve ser desenvolvido de forma modular e bem documentada, permitindo que futuras atualizações e manutenções sejam realizadas de maneira eficiente. Deve ser possível fazer modificações sem afetar o funcionamento geral do sistema. |
| RNF06  | Escalabilidade  | O sistema deve ser capaz de lidar com um aumento na quantidade de usuários e volume de dados ao longo do tempo, sem comprometer o desempenho. Deve ser dimensionado de maneira adequada para suportar o crescimento do número de usuários e processos. |
| RNF07  | Integração  | O sistema deve ter a capacidade de se integrar com outros sistemas ou serviços externos, como serviços de e-mail para envio de notificações aos usuários. |
| RNF08  | Rastreabilidade  | O sistema deve ser capaz de rastrear todas as operações realizadas pelos usuários, registrando informações como data, hora, usuário responsável e detalhes das modificações efetuadas. Isso permite a auditoria e a recuperação de informações em caso de necessidade. |
| RNF09  | Compatibilidade  | O sistema deve ser compatível com os principais navegadores web e dispositivos utilizados pelos usuários, garantindo uma experiência consistente em diferentes plataformas. |
| RNF10  | Disponibilidade  | O sistema deve estar disponível para acesso dos usuários durante a maior parte do tempo, com um tempo de inatividade planejado mínimo para manutenção e atualizações. |
| RNF11  | Conformidade  | O sistema deve estar em conformidade com as leis e regulamentos de proteção de dados e privacidade, garantindo que as informações dos usuários sejam tratadas de acordo com as normas aplicáveis. |
| RNF12  | Backup e recuperação  | O sistema deve ter um mecanismo de backup regular para proteger os dados contra perda ou corrupção. Em caso de falhas, deve ser possível restaurar os dados a partir de um backup confiável. |

## Diagrama caso de uso


