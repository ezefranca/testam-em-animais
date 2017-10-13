# Testam ou não testam em animais
Webservice da lista de empresas e produtos que efetuam ou não testes em animais, do portal [Vista-se](https://vista-se.com.br). 

<img src="https://raw.githubusercontent.com/ezefranca/testam-em-animais/master/views/banner.png"/>

## Utilizando

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

```bash
git clone https://github.com/ezefranca/testam-em-animais.git
```

Instalar a dependencia:

```bash
npm install lista-impropria-api --save
```

Em seguida basta executar o `index.js`:

```bash
node index.js
```

Abra seu navegador em [localhost:8080](http://localhost:8080/) e execute os metodos:

### Testam
```bash
GET /testam
```

### Não Testam
```bash
GET /naoTestam
```

## Disclaimer

Isso foi extraido do site através de um crawler, além disso não sou desenvolvedor javascript.


