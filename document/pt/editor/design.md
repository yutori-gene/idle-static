
# Design
As configurações de aparência do mundo, como as cores e a fonte
- São as configurações sobre a apresentação do mundo.
- As duas cores decididas aqui (a cor de barra e a cor de texto) passam a ser a base de toda a tela, e todas as cores usadas nela, como a linha selecionada, o cabeçalho de um grupo e as cores de afirmação e negação, são criadas a partir delas.
- Só a imagem de fundo pode ser substituída por categoria e, nesse caso, tem prioridade a configuração do lado da categoria.
___

## Cor de barra
A cor que serve de fundo da barra
- É usada como cor de fundo da barra.
- Como é também a cor que serve de base para toda a tela, a cor da linha selecionada é criada a partir dela igualmente.
- As amostras de cor dos elementos sem cor definida e o fundo das notificações flutuantes passam a ser a cor intermediária entre esta cor e a cor de texto.
___

## Cor de texto
A cor do texto e do fundo
- É usada como cor do texto.
- O degradê do fundo também é criado a partir desta cor. Se uma imagem de fundo for definida, o mesmo degradê é clareado e sobreposto à imagem.
- Tomar uma diferença grande de luminosidade em relação à cor de barra deixa o texto mais fácil de ler. Nos mundos com pouca diferença, as amostras de cor dos elementos sem cor definida também ficam mais difíceis de distinguir.
___

## Cor de sombra
A cor da sombra da barra
- É usada como cor da sombra que cai sobre as barras e o cabeçalho.
- Deixá-la numa cor mais escura que a cor de barra dá uma sombra natural.
___

## Imagem de fundo
A imagem de fundo do jogo inteiro
- Define a imagem de fundo do jogo.
- Se nenhuma imagem for definida, o fundo passa a ser um degradê baseado na cor de texto.
- A imagem é reduzida automaticamente para caber em 256×256 pixels. Os GIF e os AVIF são convertidos em PNG.
- Se uma imagem de fundo for definida numa categoria, na tela dessa categoria tem prioridade a imagem do lado da categoria.
- A imagem definida pode ser apagada com o botão Delete Image.
- [_category_](pt/editor/category)