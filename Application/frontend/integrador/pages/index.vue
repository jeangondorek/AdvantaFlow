<template>
  <body>
    <section id="containerLogin">
      <h1>login</h1>
      <div id="containerUsuario">
        <p>Usuário</p>
        <input type="text" placeholder="Ex: willianpont">
      </div>
      <div id="containerSenha">
        <p>Senha</p>
        <input type="text" placeholder="Ex: senha123">
      </div>
      <div id="containerAdicionais">
        <div id="adicionaisLembrarLogin">
          <input type="checkbox" name="" id="">
          <p>Lembrar login</p>
        </div>
        <div id="adicionaisRecuperarSenha">
          <a href="#">Recuperar senha</a>
        </div>
      </div>
      <button id="efetuarlogin">Efetuar Login</button>
    </section>
  </body>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
  * {
    font-family: 'Source Sans Pro', 'sans-serif';
    --font-family-titulo: 'Inter', 'sans-serif';
    --color-title: #FCFCFC;
  }
  body {
    background-color: #1C1A20;
  }
  h1 {
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    color: var(--color-title);
    font-family: var(--font-family-titulo);
    padding: 77px 0 97px 0;
  }
  #containerLogin {
    width: 673px;
    margin: 0 auto;
    border-radius: 8px;
    background: linear-gradient(224deg, rgba(54, 49, 64, 0.14) 0%, rgba(255, 255, 255, 0.03) 100%); 
  }
  #containerUsuario, #containerSenha, #containerAdicionais {
    width: 453px;
    margin: 0 auto;
  }
  #containerUsuario {
    margin-bottom: 29px;
  }
  #containerUsuario input, #containerSenha input {
    width: 453px;
    height: 48px;
    background-color: #111827;
    border-radius: 4px;
    padding: 8px 12px;
    color: #9CA3AF;
  }
  #containerUsuario p, #containerSenha p {
    margin-bottom: 5px;
    color: #E5E7EB;
  }
</style>