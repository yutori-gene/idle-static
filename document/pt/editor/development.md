
# Desenvolvimento
A gestão das anotações e dos erros durante o desenvolvimento do mundo
- É usado durante o desenvolvimento do mundo.
- Diz respeito ao desenvolvimento e aos testes deste mundo, e não afeta o conteúdo da partida.
- O jogador nunca vê o conteúdo relativo ao desenvolvimento.
___

## Versão
O número de versão de compilação do editor
- O número de versão do editor no momento em que o mundo novo foi criado é registrado automaticamente.
- Ele não é atualizado mesmo que você carregue e edite um mundo já existente.
- O desenvolvedor não pode alterar este conteúdo.
___

## Anotação
O registro de anotações para o desenvolvedor
- O desenvolvedor pode escrever livremente nele como anotação.
- Não guarda relação com a publicação do jogo.
___

## Erros
O registro de erros do resultado da validação
- O resultado de validar o mundo é salvo aqui automaticamente.
- Por exemplo, ele exibe como erros coisas como haver um tipo de caractere que não pode ser digitado ou ter sido digitado um número acima do limite superior.
- Se não houve nem um único erro, em vez disso é salva uma mensagem de sucesso em uma única linha.
- O desenvolvedor não pode alterar este conteúdo.
- Enquanto restarem erros não dá para publicar o mundo. Ao executar a publicação, primeiro a validação é realizada e, se houver erros, ela é interrompida ali.
___

## Carimbo de data e hora
O registro da criação, do salvamento e da publicação
- Os horários de criação, salvamento e publicação do mundo são registrados automaticamente.
- O desenvolvedor não pode alterar este conteúdo.
___

### Data de criação
O horário da primeira criação do mundo
- É a data e hora em que o mundo foi criado pela primeira vez.
___

### Data de salvamento
O horário do último salvamento realizado
- É a data e hora em que o mundo foi salvo pela última vez.
___

### Data de publicação
O horário da última publicação realizada
- É a data e hora em que o mundo foi publicado pela última vez.
___

## Salvamento automático
Ativação/desativação da função de salvamento automático
- Indica se o conteúdo da edição é salvo automaticamente no navegador.
- Você não pode reescrever este campo diretamente. Ele é alterado com o interruptor de salvamento automático no menu do editor.