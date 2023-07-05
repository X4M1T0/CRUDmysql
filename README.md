# Criando e linkando o app com banco de dados MYSQL 

- Gerando DBD dentro da pasta 'database'
    - npm init -y  (GERA O DBD E COM '-Y' COLETA O DIRETÓRIO ESPECÍFICO DENTRO DO CONSOLE)

- API's utilizadas
    - express
    - mysql
    - cors
    - nodemon
 
- Para instalá-las: npm install express mysql cors nodemon -s

- LEMBRE-SE DE CONFIGURAR AS PORTAS, LOCALHOST E O SERVIDOR LOCAL DO MYSQL CORRETAMENTE PARA QUE TUDO FUNCIONE SEM ERROS!!! 
  
# O CRUD
O CRUD funciona da seguinte forma: Temos alguns inputs dentro da página de criar conta que, quando ativos pelo botão de ação da página, repassam essas informações para uma rota do servidor local que armazena esses dados dentro do dbd;
