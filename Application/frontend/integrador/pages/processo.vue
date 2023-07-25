<template>
    <div>
        <menuComponent/>
        <dashboardVoltar/>
        <main id="mainContainer">
            <h1 id="tituloProcesso">Novo Processo</h1>
            <div id="detalhesProcesso">
                <p>Detalhes do processo</p>
                <p>Nº{{ numeroProcesso }}</p>
            </div>
            <span></span>
            <div id="container">
                <div class="containerInput">
                    <label id="up" for="numProcessoCnpj">Número do Processo CNPJ</label>
                    <input v-model="numeroProcessoCnpj" type="text" id="numProcesso" placeholder="Ex:">
                </div>
                <div class="containerInput">
                    <label for="tituloProcesso">Título do Processo</label>
                    <input v-model="tituloProcesso" type="text" id="tituloProcesso">
                </div>
                <div class="containerInput">
                    <label for="assuntoProcesso">Assunto</label>
                    <input v-model="assuntoProcesso" type="text" id="assuntoProcesso" placeholder="Ex: Ocorreu uma quebra de contrato...">
                </div>
                <div class="containerInput">
                    <label for="comarcaProcesso">Comarca</label>
                    <input v-model="comarcaProcesso" type="text" id="comarcaProcesso" placeholder="Ex: 1">
                </div>
                <div class="containerInput">
                    <label for="faseProcesso">Fase</label>
                    <input v-model="faseProcesso" type="text" id="faseProcesso" placeholder="Ex: 2">
                </div>
                <div class="containerInput">
                    <label for="tarefaProcesso">Tarefa</label>
                    <input v-model="tarefaProcesso" type="text" id="tarefaProcesso" placeholder="Ex: 21">
                </div>
                <div class="containerInput">
                    <label for="clienteProcesso">Cliente</label>
                    <input v-model="cpfCnpjCliente" type="text" id="clienteProcesso">
                </div>
                <div class="containerInput">
                    <label for="usuarioProcesso">Usuário</label>
                    <input v-model="cpfUsuario" type="text" id="usuarioProcesso">
                </div>
                <div class="containerInput">
                    <label for="numeroProcessoCnpj">Descrição</label>
                    <input v-model="descricaoProcesso" type="text">
                </div>
                <div class="containerInput">
                    <label for="numeroProcessoCnpj">Resultado do Processo</label>
                    <input v-model="resultadoProcesso" type="text">
                </div>
            </div>
            <div id="buttons">
                <button @click="salvar()">Salvar</button>
                <button @click="cancelar()">Cancelar</button>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'processo',
        data() {
            return {
                numeroProcesso: 12,
                numeroProcessoCnpj: '',
                descricaoProcesso: '',
                tituloProcesso: '',
                resultadoProcesso: '',
                dataCriacaoProcesso: '',
                comarcaProcesso: null,
                assuntoProcesso: null,
                faseProcesso: null,
                cpfCnpjCliente: '',
                cpfUsuario: '',
                tarefaProcesso: null,
            }
        },
        methods: {
            async salvar() {
                const params = {
                    "numero_cnpj_processo": this.numeroProcessoCnpj,
                    "descricao_processo": this.descricaoProcesso,
                    "titulo_processo": this.tituloProcesso,
                    "resultado_processo": this.resultadoProcesso,
                    "data_criacao_processo": this.dataCriacaoProcesso,
                    "id_comarca_processo": this.comarcaProcesso,
                    "id_assunto_processo": this.assuntoProcesso,
                    "id_fase_processo": this.faseProcesso,
                    "cpf_cnpj_cliente_processo": this.cpfCnpjCliente,
                    "cpf_usuario_processo": this.cpfUsuario
                };

                fetch( process.env.VUE_APP_ROOT_API + '/processo', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify(params)
                })
                .then((resp) => resp.json())
                .then((data) => console.log(data))
                .catch(error => alert(`Ocorreu um erro: ${error}`))
            },
            cancelar() {
                this.numeroProcessoCnpj = ''
                this.descricaoProcesso = ''
                this.tituloProcesso = ''
                this.resultadoProcesso = ''
                this.dataCriacaoProcesso = ''
                this.comarcaProcesso = 0
                this.assuntoProcesso = 0
                this.faseProcesso = 0
                this.cpfCnpjCliente = ''
                this.cpfUsuario = ''
            }
        }
    }
</script>

<style scoped>
    span{
        width: 380px;
        border: 1px solid #1a1a1a;
        display: block;
        margin: 0 auto;
    }
    #mainContainer{
        position: absolute;
        left: 22.875rem;
        top: 124px;
        width: 68%;
        height: 78%;
        background: linear-gradient(135deg, rgba(54, 49, 64, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%);
    }
    #tituloProcesso{
        text-align: center;
        margin: 32px 0 12px 0;
        color: var(--color-text-geral);
        font-family: RocknRoll One, sans-serif;
        font-size: 22px;
    }
    #detalhesProcesso{
        display: flex;
        gap: 136px;
        max-width: 353px;
        max-height: 420px;
        margin: 0 auto;
        color: #E5E7EB;
    }
    #container{
        max-width: 353px;
        max-height: 380px;
        overflow-y: scroll;
        margin: 0 auto;
    }
    .containerInput{
        color: #e5e7eba4;
    }
    .containerInput input{
        width: 96%;
        height: 48px;
        background-color: #111827;
        border: 1px solid var(--border-input);
        border-radius: 4px;
        padding: 8px 12px;
        color: var(--color-text);
        margin: 8px 1px;
    }
    
    #buttons{
        display: flex;
        gap: 50px;
        max-width: 353px;
        margin: 0 auto;
    }
    #buttons button:nth-child(1) {
        background-color: var(--color-button);
        color: #FFFFFF;
    }
    #buttons button:nth-child(2) {
        
        padding: 2px 0;
        background-color: #FFFFFF;
        color: #636363;
    }
    #buttons button{
        width: 140px;
        border-radius: 4px;
    }
</style>