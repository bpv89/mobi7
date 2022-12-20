Guia de uso

<strong>Comandos</strong>
<details> 
docker-compose up -d
docker exec -it api bash
npm install

npm run prestart // cria a base de dados, realiza a migration e o seed do banco de dados
npm run clear // Deruba a base de dados

npm run debug ou npm start
 </details>
<strong>Rotas</strong>
<details> 

<strong>/cars</strong>
 <details> 

Esta rota possibilita a listagem dos veiculos armazenados e a adição de novos veículos ao banco de dados.

Com o uso do POST, o unico argumento requerido é a placa do veículo, no formato: { placa: "PLACA001"}, dentro do body da requisição.

 </details>
 <strong>/onposition</strong>
 <details> 

Esta rota possibilita a listagem dos posições dos veículos armazenados, que se encontram dentro dos POIs

 </details>
 <strong>/points</strong>
 <details> 

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
 <strong>/vehiclespos</strong>
 <details> 

Esta rota possibilita a listagem dos posições dos veículos armazenados bem como a adição de novas posiçoes. A adição de novas posições deve seguir o seguinte padrão, dentro do body da requisição:

{
  "placa": "TESTE003",
  "data_posicao": "2018-12-12 02:04:03.000Z",
  "velocidade": 0,
  "latitude": "-25.36491410",
  "longitude": "-51.46989100",
  "ignicao": 0
}



 </details>
 <strong>/search</strong>
 <details> 

Esta rota possibilita a listagem dos tempos dos veículos dentro de cada POI, ainda permitindo a filtragem por meio da data e da placa do veículo.
<details>/

    Aqui são listados todos os veiculos, conforme a busca pela data, aceitando os dois parametros, ou apenas um deles: 

    {
    lower: "2018-12-12 02:04:03",
    upper: "2018-12-14 02:04:03"
    }



</details>
<details>/date

Esta rota permite a busca da posição dos veículos dentro dos POIs, em determinada data, esta rota deve ser chamada com o seguinte parametro, dentro do corpo de requisição: 

{
    lower: "2018-12-12 02:04:03",
    upper: "2018-12-14 02:04:03"
}

A entrada também permite a existência de apenas um unico parâmetro, caso seja passado o parâmetro lower, sera exibido o todos os tempos por ponto, apos a data estabelecida. Caso o parâmetro enviado seja o upper, será devolvidos as datas abaixo do ponto. Caso ambos sejam enviados, a resposta estara com o tempo de permanencia dentro do range 

</details>
<details>/plate</details>

Esta rota permite a busca dos veículos dentro dos pontos de interesse, por meio de sua placa. A requisição de busca deve seguir o seguinte formato:

{
    plate: "TESTE001"
}

Retornando o tempo que o veiculo passou am cada POI.


 </details>

<details>/allplate</details>

Esta rota permite a busca dos veículos dentro dos pontos de interesse, por meio de sua placa. A requisição de busca deve seguir o seguinte formato:

{
    plate: "TESTE001"
}

Retornando todas as posições de um determinado veículo que se encontram dentro das POIs.


 </details>



 </details>
