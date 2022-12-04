##O que esta sendo desenvolvido

<details> <strong>Comandos</strong>
docker-compose up -d
docker exec -it api bash
npm install

npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all

npm run debug ou npm start
 </details>

<details> <strong>Rotas Principais</strong>



/time


 <details> <strong>/cars</strong>

Esta rota possibilita a listagem dos veiculos armazenados e a adição de novos veículos ao banco de dados.

Com o uso do POST, o unico argumento requerido é a placa do veículo, no formato: { plate: "PLACA001"}, dentro do body da requisição.

 </details>
 <details> <strong>/onposition</strong>

Esta rota possibilita a listagem dos posições dos veículos armazenados, que se encontram dentro de algum dos POIs

 </details>
 <details> <strong>/points</strong>

Esta rota possibilita a listagem dos POIs armazenados e a adição de novos POIs ao banco de dados. A adição de um novo POI automaticamente atualiza, a lista de veículos que possam estar dentro desta rota. 

Para o envio de novos pontos o seguinte formato deve ser seguido:
{
  "nome": "Ponto999",
  "raio": "2018",
  "latitude": "-25.36491410",
  "longitude": "-51.46989100"
}

O envio deve estar dentro do body da requisição

 </details>
 <details> <strong>/vehiclespos</strong>

Esta rota possibilita a listagem dos posições dos veículos armazenados bem como a adição de novas posiçoes. A adição de novas posições deve seguir o seguinte padrão, dentro do body da requisição:

{
  "placa": "TESTE003",
  "data_posicao": "2018-12-12 02:04:03",
  "velocidade": 0,
  "latitude": "-25.36491410",
  "longitude": "-51.46989100",
  "ignicao": 0
}



 </details>
 <details> <strong>/time</strong>

Esta rota possibilita a listagem dos tempos dos veículos dentro de cada POI, ainda permitindo a filtragem por meio da data e da placa do veículo.
<details>/

    Aqui são listados todos os veiculos dentro dos POIs, as seguintes informações são passadas, conforme o modelo por todas as rotas:

    Id do veículo
    Placa do veículo
    Id do ponto
    Nome do Ponto
    Data de entrada no ponto
    Data de saída do ponto
    Tempo total gasto no ponto

</details>
<details>/date

Esta rota permite a busca da posição dos veículos dentro dos POIs, em determinada data, esta rota deve ser chamada com o seguinte parametro, dentro do corpo de requisição: 

{
    date: "2018-12-12 02:04:03"
}

A menor busca permitida esta relacionada com o ano, portando ela não aceita valores menores do que 4 cacacteres.

</details>
<details>/plate</details>

Esta rota permite a busca dos veículos dentro dos pontos de interesse, por meio de sua placa. A requisição de busca deve seguir o seguinte formato:

{
    plate: "TESTE001"
}


 </details>



 </details>
