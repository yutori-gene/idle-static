
# Visão geral
As informações básicas do mundo e as informações do autor
- São os campos que explicam o conteúdo do mundo.
- Defina-os de modo que fiquem claros quando um usuário escolhe o mundo.
- Fora a URL, estas configurações não afetam o andamento do jogo.
___

## [_Informação_](pt/editor/information)
___

## Versão
O número de versão do mundo
- Digite um número de `0` ou mais (inteiro ou decimal). O valor padrão é `0`.
- Em geral, a parte inteira representa a versão maior e a parte decimal, a versão menor.
- A versão do desenvolvimento (development) é a versão do editor, então é outra coisa.
___

## Nome do autor
O nome do autor do mundo
- Digite um nome de usuário ou um apelido.
- Deve ter de 3 a 20 caracteres e só podem ser usadas letras e algarismos de meia largura, espaços e `!` `?` `.` `,` `-`.
___

## Página inicial
A URL do site do autor
- Se você tiver página inicial própria ou redes sociais, digite a URL delas.
- O jogador pode conferir esta URL pelo link.
- Se não houver nenhuma, deixe em branco. O valor inicial é `https://`.
___

## URL
A URL do jogo
- Digite a URL onde o jogo deste mundo é colocado.
- Digite a URL de uma página inicial como index.html, incluindo o domínio.
- É um campo para deixar registrado onde o mundo foi colocado. Se o lugar onde colocá-lo não estiver decidido, deixe em branco.
- Um mundo publicado funciona como PWA. Um PWA é um recurso que permite instalá-lo e que funcione como um aplicativo com o qual também dá para jogar off-line.
- As configurações do PWA são criadas com caminhos relativos, então ele funciona como está no lugar onde for colocado, independentemente do valor deste campo.
___

## Tempo de jogo estimado
O tempo aproximado até concluir a partida do mundo
- É o tempo de jogo estimado necessário para concluir a partida do mundo.
- Dá para conferi-lo como orientação quando o jogador joga.
- É apenas um tempo de referência, e não há uma definição clara do que conta como concluir o mundo.
___

### Valor
O número do tempo de jogo
- Define-se com um inteiro de `1` ou mais. O valor padrão é `1`.
___

### Unidade
A unidade de tempo (horas, minutos e assim por diante)
- Escolhe-se entre segundos, minutos, horas, dias, anos, séculos e infinito. O valor padrão é dias.
- Infinito é usado para os mundos que não têm fim.