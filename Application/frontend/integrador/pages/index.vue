<template>
  <body>
    <section id="containerLogin">
      <h1>login</h1>
      <div id="containerUsuario">
        <p>Usuário</p>
        <input v-model="usuario" type="text" placeholder="Ex: willianpont">
      </div>
      <div id="containerSenha">
        <p>Senha</p>
        <input v-model="password" :type="typePass" placeholder="Ex: senha123">
        <img @click="alterTypePassword" src="../static/passwordIcon.png" alt="">
      </div>
      <div id="containerAdicionais">
        <div id="adicionaisLembrarLogin">
          <input v-model="savePassword" type="checkbox" name="savePassword" id="savePassword">
          <label for="savePassword">Lembrar login</label>
        </div>
        <div id="adicionaisRecuperarSenha">
          <a href="#">Recuperar senha</a>
        </div>
      </div>
      <button @click="login" id="efetuarlogin">Efetuar Login</button>
    </section>
  </body>
</template>

<script>
export default {

  name: 'IndexPage',
  data() {
      return {
        typePass: 'password',
        usuario: '',
        password: '',
        savePassword: true,
      }
  },
  mounted() {
    const login = JSON.parse(localStorage.getItem('login'));

    if (!login.savePassword) {
      this.usuario = '';
      this.password = '';
      this.savePassword = false;
      return
    }

    this.usuario = login.usuario;
    this.password = login.password;
  },
  methods: {
    alterTypePassword() {
      this.typePass = this.typePass === 'password' ? 'text' : 'password';
    },
    async login() {
      if (!this.usuario || !this.password) {
        alert("Necessário informar login e senha!");
        return;
      }
    
      const statusLogin = await fetch('http://localhost:5555/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({"cpf_usuario": this.usuario, "senha_hash_usuario": this.password})
      })
      .then((resp) => resp.json())
      .catch(error => alert(`Ocorreu um erro: ${error}`))

      if (statusLogin.error) {
        alert(`Não foi possível efetuar o login: ${statusLogin.error}`)
        return;
      }

      localStorage.setItem('login',
        JSON.stringify({usuario:this.usuario, password:this.password, savePassword:this.savePassword})
      )
      this.$router.push('/dashboard');
    }
  },
  watch: {
    savePassword(savePassword) {
      this.savePassword = savePassword;
    }
  }
}
</script>

<style scoped>
  * {
    font-family: 'Source Sans Pro', 'sans-serif';
    --font-family-titulo: 'Inter', 'sans-serif';
    --color-title: #FCFCFC;
    --color-text: #9CA3AF;
    --border-bottom-color: #EDEDED;
    --border-input: #374151;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 673px;
    padding-bottom: 50px;
    border-radius: 8px;
    background: linear-gradient(224deg, rgba(54, 49, 64, 0.14) 0%, rgba(255, 255, 255, 0.03) 100%); 
  }
  #containerUsuario, #containerSenha, #containerAdicionais {
    width: 453px;
    margin: 0 auto;
  }
  #containerSenha {
    position: relative;
  }
  #containerSenha img {
    position: absolute;
    top: 57%;
    left: 90%;
    cursor: pointer;
  }
  #containerUsuario {
    margin-bottom: 29px;
  }
  #containerUsuario input, #containerSenha input {
    width: 453px;
    height: 48px;
    background-color: #111827;
    border: 1px solid var(--border-input);
    border-radius: 4px;
    padding: 8px 12px;
    color: var(--color-text);
  }
  #containerUsuario p, #containerSenha p {
    margin-bottom: 5px;
    color: #E5E7EB;
  }
  #containerAdicionais {
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
  }
  #adicionaisLembrarLogin {
    display: flex;
    gap: 10px;
  }
  #adicionaisRecuperarSenha {
    border-bottom: 1px solid var(--border-bottom-color);
  }
  label, a{
    color: var(--color-text);
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 453px;
    height: 38px;
    margin: 84px auto 0;
    color: #FFFFFF;
    background-color: #9333EA;
    border-radius: 8px;
  }
</style>