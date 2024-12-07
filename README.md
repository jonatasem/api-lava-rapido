# Sistema de Lava Rápido

Este é um sistema de lava rápido desenvolvido com Node.js e MongoDB. O sistema permite o cadastro de usuários e agendamentos de serviços de lavagem de veículos.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Cors
- Body-Parser
- dotenv

## Instalação

1. Clone o repositório:

   git clone https://github.com/jonatasem/api-lava-rapido.git
   cd api-lava-rapido
   

2. Instale as dependências:

   npm install
   

3. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

   env
   MONGODB_URI=mongodb+srv://usuario:senha@cluster0.gq82bry.mongodb.net/
   PORT=5000
   

   **Substitua `usuario` e `senha` pelas suas credenciais do MongoDB.**

## Uso

Para iniciar o servidor, execute:

bash
npm run dev


O servidor estará rodando em `http://localhost:5000`.

## Rotas Disponíveis

### Usuários

- **Criar Usuário**
  - `POST /api/usuarios`
  - Corpo da requisição:
    json
    {
        "nome": "Nome do Usuário",
        "telefone": "123456789",
        "endereco": {
            "rua": "Rua Exemplo",
            "numero": "123",
            "bairro": "Bairro Exemplo",
            "cidade": "Cidade Exemplo",
            "estado": "Estado Exemplo",
            "cep": "12345-678"
        }
    }
    

- **Listar Usuários**
  - `GET /api/usuarios`

- **Editar Usuário**
  - `PUT /api/usuarios/:id`
  - Corpo da requisição (exemplo):
    json
    {
        "nome": "Nome Atualizado"
    }
    
- **Excluir Usuário**
  - `DELETE /api/usuarios/:id`

### Agendamentos

- **Criar Agendamento**
  - `POST /api/appointments`
  - Corpo da requisição:
    json
    {
        "cliente": {
            "nome": "Nome do Cliente",
            "telefone": "123456789",
            "veiculos": [
                {
                    "modelo": "Modelo do Veículo",
                    "marca": "Marca do Veículo",
                    "ano": 2020,
                    "placa": "ABC1D23"
                }
            ]
        },
        "status": "aguardando lavagem"
    }
    

### Serviços

- **Listar Serviços**
  - `GET /api/services`


## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades. Abra um pull request ou envie um issue.

## Licença

Este projeto está licenciado sob a MIT License.