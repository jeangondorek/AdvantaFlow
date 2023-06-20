import { pool } from './src/database/database.index';
import { server, env, port } from './src/server';

server.listen(port, () => {
    console.log(`Example app listening on port ${port} env ${env}!`);
});
    
pool.connect()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao estabelecer conexão com o banco de dados:', error);
  });