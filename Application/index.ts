import { pool } from './src/imports';
import { server, env, port } from './src/server';

pool.connect()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
    server.listen(port, () => {
      console.log(`Aplication started on http://localhost:${port} in env ${env}!`);
    });
  })
  .catch((error) => {
    console.error('Erro ao estabelecer conexão com o banco de dados:', error);
  });
