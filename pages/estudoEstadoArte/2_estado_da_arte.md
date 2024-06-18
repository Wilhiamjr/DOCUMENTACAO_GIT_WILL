---
title: Estado da Arte
description: Estado da Arte
---
# Estado da Arte

A observação direta é o procedimento mais adequado para se avaliar se a higienização de mãos foi executada de maneira correta, porém esta é uma atividade 
 demorada e cara, pois exige a presença de um profissional para a vistoria. Graças a evolução no poder de processamento computacional, a inteligência artificial
 avançou a ponto de ser possível a construção de programas inteligentes de computador que realizem a função de observador, indicando se a atividade foi realizada 
 corretamente ou não.

A maioria dos sistemas atuais se utilizam de uma técnica chamada de Redes Neurais Profundas para conseguir analisar imagens de maneira muito mais rápida e às vezes
 até mais eficaz que humanos. Esta técnica consiste na verificação de repetitiva de um conjunto de imagens para que possa aprender padrões nas mesmas. Apesar de
 poderosa, ela tem limitações: imagens de um mesmo objeto ou ação ou podem variar em diversos aspectos como iluminação, posição, cor, perspectiva e qualidade, por
 isso, para que o sistema aprenda padrões que possam ser utilizados em novas imagens, é necessário que uma base de dados grande e diversa seja utilizada em seu
 aprendizado, e quanto maior a complexidade, mais imagens são necessárias. 

O aprendizado do reconhecimento da higienização correta das mãos é uma atividade complexa, pois o número de passos varia dependendo da higienização realizada; a
 presença de água e sabão faz com que imagens capturadas destas higienizações sejam muito distintas das realizadas com álcool, mesmo quando o gesto se repete; e,
 devido a natureza da mesma, a quantidade de base de dados existentes que podem ser utilizadas no aprendizado é bem escassa, pois dependem da coleta de imagens em
 hospitais e centros cirúrgicos. Por isso, existem poucas pesquisas publicadas sobre o assunto, sendo o maior diferencial delas, o compartilhamento da base de dados.

## Trabalhos Relacionados

Os principais trabalhos de classificação de imagens utilizam uma técnica chamada de redes neurais convolucionais (CNN) para a criação de diversos modelos de
 aprendizado de máquina de classificação de imagens mais avançados. No trabalho de Greco et al. [^greco2022deep], a técnica é utilizada em vídeos capturados
 de uma câmera com sensor de profundidade posicionada acima da pia. A informação de profundidade é usada em conjunto com informações de distância entre as mãos e a
 câmera para filtrar apenas os pixeis relevantes da imagem. Eles dividem os vídeos capturados em uma sequência de fotos e avaliam cada uma delas, buscando classificá-las
 em 10 classes, exemplos delas podem ser vistas na figura abaixo.  O principal diferencial é que eles exploram o efeito temporal do vídeo através de uma
 "janela deslizante" que classifica o frame atual baseado na média da classificação de até os últimos 4 segundos de vídeo. Esta abordagem aumentou a performance deles de
 88% até 95%. 

 ![Classes definidas em [^greco2022deep]](/estudoClinico/italiaSample.png)
_Figura: Amostra das 10 classes definidas em [^greco2022deep]._

Outra abordagem possível é utilizar redes neurais recorrentes. Elas funcionam de maneira realimentada, de modo que, ao receber um vídeo como entrada, os frames anteriores
 têm peso na classificação dos frames atuais. Uma dessas abordagens se chama Long Short Term Memory (LSTM)[^hochreiter1997long] - em tradução literal: Memória de Curto
 e Longo Prazo - e é utilizada por Cikel et al.m[^cikel2021evaluation]. Em sua pesquisa, eles utilizam um conjunto de dados público contendo 292 vídeos de higienização 
 de mãos divida em 12 classes em 3 redes diferentes[^kaggle]. Na primeira rede, as imagens RGB puras são utilizadas em uma rede LSTM, resultando numa performance 
 de 78,67%. Na segunda rede, um fluxo ótico (optical flow) é utilizado, resultando em 76% de performance. Um Fluxo ótico é uma imagem criada a partir da diferença de frames 
 do vídeo para capturar informação de direção e magnitudes de movimento. Um exemplo é ilustrado na abaixo. Na terceira rede eles unem as duas abordagens, 
 criando uma rede que recebe os dois tipos de dado em conjunto, resultando em performance de 72%. Eles também testaram reduzir o número de classes do conjunto de dados unindo 
 anotações que representavam o mesmo movimento usando a mão esquerda e a direita na mesma classe, diminuindo o número de categorias de 12 para 7. Ao fazer isso, a rede RGB 
 obteve 97,33% de performance, ja rede de fluxo ótico alcançou 81,33% e, a união de ambas, atingiu índice de 90,67%.
 
 ![Amostra de um frame](/estudoClinico/optical_flow.png)
_Figura: Amostra de uma frame RGB (a) e seu fluxo  ́otico (B). Retirado de [^cikel2021evaluation]._


O trabalho de Nagaraj et al.[^nagaraj2022real] também utiliza fluxo ótico para tentar conseguir melhores resultados. Em sua abordagem, eles criam uma rede de três fases
 paralelas, a primeira recebe a frames em RGB, a segunda recebe os fluxos óticos e a terceira recebe histogramas de gradientes orientados (HOG) dos frames. O HOG serve para
 a extração de características de objetos, como arestas. As três entradas são processadas em camadas convolucionais e unidas em uma camada de fusão para a predição. Eles
 também utilizaram o conceito de janela flutuante para decidir a classe do frame atual baseada nos frames anteriores, resultando em performance de 95,1%. Individualmente,
 a rede RGB resultou em 88,7%, o fluxo ótico resultou em 82,3% e o HOG resultou em 67,2%. 

A maioria dos trabalhos realizaram suas pesquisas em um único conjunto de dados, por isso Elsts et al[^elsts2022cnn] investigou se variar o conjunto de dados
influencia tanto quanto a arquitetura de rede neural utilizada. Eles reuniram três conjuntos de dados diferentes, Kaggle, METC e Pauls Stradins Hospital, e testaram
a performance de três abordagens diferentes em cada uma das bases. O número de classes utilizadas foi 7 (uma para cada movimento desconsiderando diferenças entre mãos
esquerda e direita) e detalhes sobre os conjuntos de dados serão escritos na próxima seção. A primeira abordagem é uma CNN simples utilizando os frames em RGB. O segundo
teste, verifica a abordagem dos trabalhos anteriores de utilizar fluxo ótico em paralelo com as imagens RGB ainda utilizando redes CNNs e uma concatenação simples. Por
último, a terceira abordagem incrementa a tentativa anterior ao colocar camadas recorrentes para unir as redes CNNs paralelas. 

Eles verificaram que os resultados são muito afetados pelos dois fatores: arquitetura e conjunto de dados, mas que o conjunto de dados teve uma influência muito maior.
 A arquitetura mais simples, utilizando apenas imagens RGB foi a que resultou em melhores resultados em todos os testes. Quanto a base de dados, o Kaggle, também
 utilizado nos trabalhos citados anteriormente, alcançou mais de 96% de performance, enquanto o conjunto METC resultou em performances de 40% a 60%, Por último, os
 dados do hospital atingiu no máximo apenas 21% de performance. Eles também testaram como os modelos treinados em uma base de dados performariam quando aplicado nas outras
 bases e o efeito de usar transferência de aprendizado entre estes conjuntos de dados. Suas principais conclusões foram que os modelos não conseguem generalizar bem e, por
 isso, os resultados ficam bem melhores quando as imagens de teste são parecidas com as de treino (mesmo conjunto de dados). Concluíram que retreinar todo o modelo alcançaria
 melhores performances do que utilizar transferência de aprendizado.

A tabela abaixo resume os principais trabalhos relacionados e seus resultados.

| Trabalho                                                          | Modelo Vencedor                                                                                                                                                                                                    | \# de Gestos | Performance       |
|-------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------------|
| **Greco et al.**[^greco2022deep]                                  | Arquitetura: VGG<br/>Imagens: RGBD<br/>Pré-treino: ImageNet<br/>Otimizador: Adam<br/>Função de loss: MSE<br/>Pós-processamento: Classificação com janela deslizante                                                | 10           | 95% F1 Score      |
| **Cikel et al.**[^cikel2021evaluation]                            | Arquitetura: ResNet-152 + LSTM<br/>Imagens: RGB<br/>Pré-treino: ImageNet<br/>Otimizador: Não informado<br/>Função de loss: Não informado                                                                           | 12           | 78,76% Acurácia   |
|**Cikel et al.**[^cikel2021evaluation]                             | Mesmo modelo do anterior                                                                                                                                                                                           | 7            | 97,33% Acurácia   |
| **Nagaraj et al.**[^nagaraj2022real]                              | Arquitetura: 3 fluxos de DenseNet-BC + Fusão por Concatenação<br/>Imagens: RGB, Fluxo ótico, HOG<br/>Pré-treino: ImageNet<br/>Otimizador: Adam<br/>Função de Loss: Cross Entropy                                   | 12           | 95,1% Acurácia    |
| **Elsts et al.**[^elsts2022cnn]                                   | Arquitetura: MobileNet V2<br/>Imagens: RGB<br/>Pré-treino: ImageNet<br/>Otimizador: Adam<br/>Função de Loss: Cross Entropy                                                                                         | 7            | 96% F1 Score      |

_Tabela: Trabalhos Relacionados._



---
[^greco2022deep]: GRECO, Antonio et al. A deep learning based system for handwashing procedure evaluation. Neural Computing and Applications, v. 35, n. 22, p. 15981-15996, 2023.
[^hochreiter1997long]: Hochreiter, Sepp, and Jürgen Schmidhuber. "Long short-term memory." Neural computation 9.8 (1997): 1735-1780.
[^cikel2021evaluation]: CIKEL, Kevin et al. Evaluation of a CNN+ LSTM system for the classification of hand-washing steps. In: XIX Conference of the Spanish Association for Artificial Intelligence (CAEPIA). 2021.
[^nagaraj2022real]: NAGARAJ, Akash et al. Real-time Action Recognition for Fine-Grained Actions and The Hand Wash Dataset. arXiv preprint arXiv:2210.07400, 2022.
[^elsts2022cnn]: ELSTS, Atis et al. CNN for Hand Washing Movement Classification: What Matters More-the Approach or the Dataset?. In: 2022 Eleventh International Conference on Image Processing Theory, Tools and Applications (IPTA). IEEE, 2022. p. 1-6.
[^kaggle]: Kaggle Dataset. "Sample: Hand Wash Dataset". Disponível em: [Kaggle](https://www.kaggle.com/datasets/realtimear/hand-wash-dataset).