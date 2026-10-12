
# Ação
O comportamento que pode ser executado nesta categoria
- Uma ação é um comportamento que, ao ser executado, dá experiência e recompensas
- O atributo é a categoria que recebe a experiência. Ela pode ser diferente da categoria da própria ação, e o nível necessário para executar também é julgado por ela
- Mantendo a linha de execução pressionada, você alterna entre iniciar e parar
- O que aparece em "Requisito" é consumido a cada execução. Quando há uma porcentagem, ela é a probabilidade de ser consumido
- As ações que não cumprem os requisitos de desbloqueio são exibidas riscadas, e a explicação fica oculta
___

## Lista de ações
A lista das ações que pertencem a esta categoria
- Uma ação é um comportamento que, ao ser executado, dá experiência e recompensas
- A lista de ações que você pode executar nesta categoria
- Mantenha pressionado para alternar se uma ação está em execução
- Dentro de uma mesma categoria só é possível executar uma
- Dependendo da categoria (com independente em passiva), ações de várias categorias podem avançar ao mesmo tempo
- As ações que não cumprem os requisitos de desbloqueio são exibidas riscadas, e a explicação fica oculta
___

## Executar
Iniciar e parar esta ação e exibir o andamento dela
- O ∞ na extremidade direita continua executando até parar no limite de recursos ou de execuções totais
- Na ordem de execução, 0 significa executar agora mesmo e 1 ou mais significa esperar. Uma execução interrompida guarda as vezes restantes, volta para a espera e é retomada depois
- Mesmo cheia, a reserva é aceita, e o que transborda é descartado a partir do fim da espera. Uma reserva que não pode ser executada quando chega a vez dela também é descartada
- Ao pressionar a linha do alvo ou da habilidade, essa coluna é aberta