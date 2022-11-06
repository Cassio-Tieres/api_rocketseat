API Rest desenvolvida com Express afim de dar uma introdução ao desenvolvimento do lado servidor com nodejs.
Esta API foi construída seguindo os passos de um evento da Rocketseat com o objetivo de dar os primeiros passos em nodejs em 2022.

Esta API funciona como um CRUD, onde utilizamos os métodos HTTPS clássicos, como POST, GET, PUT e DELETE, além de explorar funções nativas do nodejs, como a função file system, que nos permite criar arquivos.


Esta função foi utilizada para que, ao cadastramos um novo produto, seja criado (caso não existe) um arquivo que irá conter os dados enviados pelo método POST. Esse arquivo irá ser atualizado caso enviemos uma requisição de atualizaçao com PUT ou DELETE (ao deletarmos um produto).
