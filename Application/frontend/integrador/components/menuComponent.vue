<template>
  <body>
    <header id="menu-bg">
      <div id="menu">
        <div id="menu-logo">
          <img src="../static/logotipo.png" alt="">
        </div>
        <nav id="menu-nav">
          <ul id="nav-geral">
            <li>
              <NuxtLink to="#" class="flexLinha">
                <div><img src="../static/cadastro-cliente-icon.png" alt=""></div>
                <p>Cadastro de Cliente</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/processo" class="flexLinha">
                <div><img src="../static/novo-processo-icon.png" alt=""></div>
                <p>Novo Processo</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/tarefa" class="flexLinha">
                <div><img src="../static/nova-tarefa-icon.png" alt=""></div>
                <p>Nova Tarefa</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="flexLinha">
                <div><img src="../static/nova-comarca-icon.png" alt=""></div>
                <p>Nova Comarca</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="flexLinha">
                <div><img src="../static/novo-assunto-icon.png" alt=""></div>
                <p>Novo Assunto</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="flexLinha">
                <div><img src="../static/nova-fase-icon.png" alt=""></div>
                <p>Nova Fase</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="flexLinha">
                <div><img src="../static/relatorio-icon.png" alt=""></div>
                <p>Relatório</p>
              </NuxtLink>
            </li>
          </ul>
          <span id="divisor"></span>
          <ul id="nav-config">
            <li>
              <NuxtLink to="#" class="flexLinha">
                <div><img src="../static/configuracao-icon.png" alt=""></div>
                <p>Configurações</p>
                <div><img src="../static/mostrar-mais-icon.png" alt=""></div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="flexLinha">
                <div><img src="../static/cadastro-usuario-icon.png" alt=""></div>
                <p>Cadastro de Usuário</p>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div id="logout">
          <NuxtLink to="/" class="flexLinha">
            <div><img src="../static/logout-icon.png" alt=""></div>
            <p>Log Out</p>
          </NuxtLink>
        </div>
      </div>
    </header>
  </body>
</template>

<script>
export default {
  name: 'menuComponent'
}
</script>

<style scoped>
  body{
    background-color: var(--primary-color);
  }
  #menu-bg{
    width: 294px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 0px 12px;
    background: linear-gradient(135deg, rgba(54, 49, 64, 0.40) 0%, rgba(250, 248, 255, 0.00) 100%);
    box-shadow: 3px 0px 4px -2px rgba(243, 243, 243, 0.151);
    color: var(--color-text-geral);
    font-family:'Inter', sans-serif; 
    font-size: 14px;
  }
  #menu{
    position: relative;
    padding: 3.5rem 0.75rem 0.75rem 2.5rem;
  }
  #menu-nav{
    position: fixed;
    top: 24%;
  }
  #menu-logo{
    margin-bottom: 18px;
  }
  #menu-nav ul > li > .flexLinha{
    display: flex;
    align-items: center;
    gap: 13px;
  }
  #menu-nav ul > li{
    margin-bottom: 18px;
  }
  #nav-geral{
    bottom: 14px;
  }
  #divisor{
    display: block;
    width: 205px;
    border: 1px solid #8D8D8D;
  }
  #nav-config{
    margin-top: 14px;
  }
  #logout {
    position: fixed;
    top: 92%;
  }
  #logout > .flexLinha{
    display: flex;
    gap: 13px;
  }
</style>
