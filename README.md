# Itix Client

Trabalhe Conosco - Desafio 01

## Pendências

-   Configurar a integração contínua.
-   Implementar os testes unitários.
-   Implementar os testes end-to-end.

## Começando

Para começar, você pode simplesmente clonar o repositório itix-client e instalar as dependências.

## Pré-requisitos

Você precisa do git para clonar o repositório itix-client. Você pode obter o git em http://git-scm.com/.

Também usamos várias ferramentas node.js para inicializar e testar o itix-client. Você deve ter o node.js e seu gerenciador de pacotes (npm) instalados. Você pode obtê-los em http://nodejs.org/.

## Clone itix-client

Clone o repositório itix-client usando o git:

`git clone https://github.com/rafaelluisdacostacoelho/itix-client.git`
`cd itix-client`

Se você quer apenas iniciar um novo projeto sem o histórico de commits itix-client, então você pode fazer:

`git clone --depth = 1 https://github.com/rafaelluisdacostacoelho/itix-client.git <nome do seu projeto>`
O `depth = 1` diz ao git para extrair apenas um commit dos dados históricos.

## Instalar dependências

Em primeiro lugar, certifique-se de que você tem bower, grunt-cli e karma-cli instalados globalmente. Para fazer isso:

`npm instalar -g bower grunhir-cli karma-cli`
Temos dois tipos de dependências neste projeto: ferramentas e código de estrutura angular. As ferramentas nos ajudam a gerenciar e testar o aplicativo.

Obtemos as ferramentas das quais dependemos por meio do npm, o gerenciador de pacotes do nó.
Obtemos o código angular via bower, o gerenciador de pacotes de código do lado do cliente.
Nós pré-configuramos o npm para executar automaticamente o bower, para que possamos simplesmente fazer:

`npm install`

Nos bastidores, isso também chamará de instalação do bower. Você deve descobrir que tem duas novas pastas em seu projeto.

node_modules - contém os pacotes npm para as ferramentas que precisamos
app/bower_components - contém os arquivos de estrutura angular
Observe que a pasta bower_components normalmente seria instalada na pasta raiz, mas o itix-client altera esse local através do arquivo .bowerrc. Colocá-lo na pasta do aplicativo facilita o envio dos arquivos por um servidor da web.

## Execute o aplicativo

Nós pré-configuramos o projeto com um servidor web de desenvolvimento simples. A maneira mais simples de iniciar este servidor é:

`npm start`
Agora navegue até o aplicativo em http://localhost:8000

## License

The MIT License, Copyright (c) 2016 Michal Pietrzak
