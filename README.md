# rocket_food


O rocket food é um projeto que visa simular a frente de uma loja. Ele exibe pratos e ingredientes, os dados dos quais ficam guardados no banco de dados no back end.
O projeto possui também a habilidade de pesquisar tanto por ingrediente quanto por nome do prato. De forma padrão o projeto tem separação entre três categorias,
prato principal, sobremesa e bebida.

As tecnologias usadas no projeto foram:
 - front end:
    - react
    - vite
    - styled-components
    - axios
    - netlify
 - back end:
    - node
    - sqlite
    - express
    - multer
    - knex
    - pm2
    - cors
    - render
    
    
E claro, alem disso tudo foi usado o javascript. Para executar este front end como dev, primeiro rode o comando npm install, depois rode o comando npm run dev. 
Para a aplicação funcionar corretamente você deve configurar a file src/services/api.js com a url do seu back end. 

deploy da aplicação: https://rocket-food-1.netlify.app/

nota: para usar a aplicação como admin para poder criar e editar pratos e ingredientes, use o login:joao@email.com e a senha:1234, 
para ver como usuario comum a aplicação apenas crie uma conta qualquer na entrada da aplicação
