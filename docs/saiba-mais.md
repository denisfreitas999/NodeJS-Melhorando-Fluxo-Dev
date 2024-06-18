# comandos

sudo docker-compose up <service>: faz o “build” e “sobe” o serviço escolhido no docker-compose;

sudo docker-compose down <service>: “derruba” o serviço escolhido no docker-compose;

sudo docker-compose build: faz o “build” dos serviços do docker-compose, porém não “sobe”. Você pode usar esse comando para forçar uma atualização do serviço após, por exemplo, mudanças em alguma configuração;

sudo docker ps: exibe uma lista dos containers em execução. O comando “sudo docker-compose down` deve interromper a execução de todos os containers que estiverem na lista;

sudo docker volume ls: lista todos os volumes. Containers por definição não armazenam dados, assim os volumes são utilizados quando é necessário armazenar dados de um container - por exemplo, no nosso serviço db;

sudo docker volume rm <id>: Remove (apaga) um volume. Atenção: isso faz com que os dados armazenados no volume sejam perdidos;

docker rm -f $(docker ps -a -q): Remove (apaga) todos os containers;

sudo docker exec -it <id do container> sh: abre o terminal do container selecionado, que pode receber comandos usuais como instalações, executar scripts, etc. Você pode descobrir o id do container desejado com sudo docker ps.

