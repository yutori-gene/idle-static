
# Tradução
Ajustes para traduzir o texto de um mundo para dez idiomas
- Há dois tipos de tradução: a das frases comuns da interface (as predefinições) e a dos nomes e explicações que o próprio mundo tem.
- A tradução das frases comuns é sempre incluída, independentemente do ajuste `translations` de geral. O autor não precisa prepará-la.
- A tradução do próprio mundo só é exportada quando `translations` de geral está ativado e o mundo é publicado, e quem a faz é o autor.
- Nos idiomas para os quais não há tradução, o texto é exibido exatamente como está escrito no mundo.
- [_general_](pt/editor/general)
___

## Ativação da tradução
O que acontece quando a tradução é ativada
- O que se ativa é `translations` de geral. Aqui se explica o que acontece ao ativá-lo.
- Quando está ativado, o mundo publicado inclui arquivos de tradução para dez idiomas, e o idioma pode ser trocado nas configurações do reprodutor. Quando está desativado, não é possível trocar de idioma.
- Os dez arquivos são exportados com o mesmo conteúdo (o texto antes da tradução). Um idioma que você não traduziu exibe o texto original como está. Também é possível traduzir apenas alguns idiomas, mas nas telas desses idiomas o texto original ficará misturado.
- Ao começar o jogo, primeiro é exibido o idioma definido em `language` de geral. Depois, ele pode ser alterado para qualquer idioma na coluna de configurações.
- No teste de jogo do editor, os arquivos de tradução do mundo ainda não existem, então trocar de idioma muda apenas as frases comuns da interface.
- Traduzir dá trabalho, mas faz com que muito mais gente possa jogar.
- [_general_](pt/editor/general)
___

## Arquivos de idioma
Os arquivos JSON exportados para a tradução
- Quando você exporta um mundo com Publicar no menu, `translations/base` recebe a tradução das frases comuns e `translations/world` recebe a tradução do próprio mundo.
- Os únicos arquivos que você traduz são os dez de `translations/world`. `translations/base` já vem traduzido, então não é preciso mexer nele.
- O conteúdo do arquivo é dividido por tipo, abaixo ficam os ID dos elementos e, abaixo deles, o nome (`name`) e a explicação (`explanation`).
- Há sete tipos: categoria, ação, item, evento, grupo, habilidade e predefinição. A moeda, a capacidade e a fila entram nos itens, a visão geral do mundo entra nas predefinições, e as tarefas e os eventos fixos entram juntos nos eventos.
- Os elementos cujo nome foi deixado em branco são exportados com um nome gerado automaticamente a partir do ID.
- Coloque os arquivos traduzidos de volta em `translations/world` com o mesmo nome.
___

## O trabalho de tradução
A edição dos dados de tradução
- Os dez arquivos exportados têm todos o mesmo conteúdo (o texto antes da tradução).
- É preciso traduzir todos os arquivos, exceto o do idioma original.
- Traduza apenas os valores de `name` e `explanation`. Não altere os ID nem a estrutura do JSON.
___

### AI
Tradução com IA
- Traduza com uma IA como ChatGPT, Copilot ou Claude.
- Ela consegue traduzir tudo de uma vez, com uma qualidade razoável.
- A tradução pode não ficar completa, e é preciso atenção especial com termos técnicos e nomes próprios.
- Dependendo do volume, usar uma IA pode ter custo.
- Se a IA interromper a tradução no meio, mandar que ela "continue" às vezes resolve. (E às vezes não.)
___

#### Exemplo de prompt
Um exemplo da instrução de tradução dada a uma IA
- Exemplo de prompt: traduza do japonês para o inglês os valores de `name` e `explanation` dos dados JSON que enviei. Não altere as chaves nem nenhuma outra parte.
___

#### Uso dos GPT
Tradução com um GPT do ChatGPT
- Usando o JSON Language Translator, disponível na biblioteca de GPT do ChatGPT, traduzir JSON fica fácil.
- A estrutura do JSON é mantida durante a tradução.
- Serviços de IA diferentes do ChatGPT às vezes oferecem a mesma função.
___

### Serviços de tradução
O uso de um serviço de tradução
- Traduza com um serviço on-line como o DeepL ou o Google Tradutor.
- Pode-se esperar uma qualidade maior que a da tradução por IA, mas dependendo do volume há cobrança.
- Um arquivo JSON não pode ser traduzido como está em um serviço de tradução, então é preciso criar um programa para usá-lo.
- Embora sejam pagos, parece haver também serviços que traduzem os dados JSON como estão (doctranslator.com e outros).
___

### Manual
A tradução feita à mão
- Abra o arquivo de tradução em um editor de texto e digite o conteúdo traduzido para cada idioma. Dá muitíssimo trabalho, mas você pode traduzir exatamente como quiser.
___

## Códigos de idioma
A lista de códigos de idioma aceitos
- O nome do arquivo de tradução é este código de idioma.
- Os idiomas aceitos são estes dez, e não é possível aumentar nem diminuir.

|Código de idioma|Idioma|
|-|-|
|en|Inglês|
|zh|Chinês (simplificado)|
|es|Espanhol|
|pt|Português|
|fr|Francês|
|ru|Russo|
|de|Alemão|
|ja|Japonês|
|id|Indonésio|
|ko|Coreano|