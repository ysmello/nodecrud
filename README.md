# NODE CHALLENG

## Recursos utilizados no desenvolvimento:

- Node.Js;
- Express.Js ~ v.4.17;
- Conceito RestFul;
- MongoDb;
- Mongoose ~6.x;
- JSON data (para retornar os dados);
- Insominia (testar a API criada);

## Testando a Aplicação no Insomnia:

Caso queira testar as API's criadas no projeto, primeiro baixe o [Insomnia](https://insomnia.rest/download).
Depois de realizar o download do Insomnia, basta agora realizar os passos abaiaxo para 
poder testar cada API criada!

  ROTA                    |     HTTP(Verbo)   |      Descrição        | 
------------------------- | ----------------- | --------------------- | 
/api/posts/:page/:limit   |       GET         | Selecionar Todos      | 
/api/posts                |       POST        | Cria um post          | 
/api/posts/:id            |       GET         | Selecionar Por Id     | 
/api/posts/:id            |       PUT         | Atualizar Por Id      |    
/api/posts/:id            |       DELETE      | Excluir Por Id        |

- Para cadastrar os dados use os seguintes campos no formatdo JSON no Body da rota:

| Field  | Type     |
| ------ | -------- |
| title  | string   |
| body   | string   |
| tags   | string[] |

- Em todas as rotas deve conter o Bearer token setado para conseguir testar as rotas como demonstra [aqui](https://docs.insomnia.rest/insomnia/authentication). 
- Em seguida gere o token no [JWT](https://jwt.io/) com a secret = 'secret'

## Executar Localmente

- Clone o repositório do projeto na sua máquina e instale as dependências executando o comando ``yarn``.
- Configure um [cluster no mongodb](https://www.mongodb.com/docs/atlas/tutorial/create-new-cluster/) para conectar ao banco.
- Dentro do projeto modifique o nome do arquivo ``.env.example`` para ``.env``.
- Cole na variável ``URI`` as configurações do cluster que foi criado.
- Executar ``yarn dev`` no terminal para iniciar o server.

### Documentação da api

Importe o documento JSON no Swagger API para visualizar a documentação

[documentation.zip](https://github.com/ysmello/nodecrud/files/8367844/documentation.zip)
