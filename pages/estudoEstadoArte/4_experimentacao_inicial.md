---
title: Experimentação Inicial
description: Resultados dos modelos nos conjuntos de dados públicos
---
# Experimentação Inicial

Uma vez que os conjuntos de dados públicos foram obtidos, realizou-se os primeiros experimentos com o objetivo de encontrar o(s)
 melhor(es) modelo(s) e parâmetros que se adequacem ao problema. Os modelos escolhidos para teste foram diferentes versões do
 **MobileNet**, o **Xception** e o **InceptionV3**. Todos eles apresentam bons resultados na literatura e tem alta velocidade de execução
 em tempo real, caracteristica essencial para o projeto. Os principais resultados são mostrados na tabela abaixo.

| **Dataset** | # de classes | InceptionV3 | MobileNetV3 Large | MobileNetV3 Small | MobileNetV2 | Xception |
|-------------|--------------|-------------|-------------------|-------------------|-------------|----------|
| MIVIA       | 10           | 0,72        | **0,94**          | 0,83              | 0,81        | 0,72     |
| Jurmala     | 7            | 0,73        | 0,85              | **0,87**          | 0,85        | 0,71     |
| Kaggle      | 7            | 0,89        | **0,94**          | **0,94**          | 0,93        | 0,89     |
| Kaggle      | 12           | 0,79        | 0,87              | **0,92**          | 0,91        | 0,78     |
| METC        | 6            | 0,24        | **0,48**          | 0,45              | 0,38        | 0,31     |
| PSKUS       | 7            | 0,79        | 0,87              | **0,92**          | 0,91        | 0,78     |

_Tabela: Performance dos modelos nos conjuntos de dados públicos._

Observa-se que, independente do conjunto de dados, os melhores resultados foram obtidos com os modelos MobileNetV3, por isso eles foram escolhidos
 para os experimentos futuros. A diferente performance de um mesmo modelo entre os conjuntos de dados deixa claro a sensibilidade dos resultados em
 relação as características dos dados, como iluminação, posição da câmera,  fundo da imagem e até de quantidade, como observado com os resultados do
 conjunto METC, o dataset com menor quantidade de dados. 

Os testes com o conjunto de dados MIVIA foram importantes mesmo não apresentando os melhores resultados, pois ele é o único dos datasets que não utilizam
 imagens RGB. Eles utilizaram imagens em escala de cinza obtidas de uma câmera de profundidade e, portanto, eliminaram a variabilidade de iluminação e fundo
 da imagem, ao mesmo tempo que perderam informação da imagem ao retirar os canais de cores. A abordagem deles foi uma grande inspiração para como a solução
 final deste projeto foi desenvolvida.


---
[^greco2022deep]: GRECO, Antonio et al. A deep learning based system for handwashing procedure evaluation. Neural Computing and Applications, v. 35, n. 22, p. 15981-15996, 2023.
[^hochreiter1997long]: Hochreiter, Sepp, and Jürgen Schmidhuber. "Long short-term memory." Neural computation 9.8 (1997): 1735-1780.
[^cikel2021evaluation]: CIKEL, Kevin et al. Evaluation of a CNN+ LSTM system for the classification of hand-washing steps. In: XIX Conference of the Spanish Association for Artificial Intelligence (CAEPIA). 2021.
[^nagaraj2022real]: NAGARAJ, Akash et al. Real-time Action Recognition for Fine-Grained Actions and The Hand Wash Dataset. arXiv preprint arXiv:2210.07400, 2022.
[^elsts2022cnn]: ELSTS, Atis et al. CNN for Hand Washing Movement Classification: What Matters More-the Approach or the Dataset?. In: 2022 Eleventh International Conference on Image Processing Theory, Tools and Applications (IPTA). IEEE, 2022. p. 1-6.
[^kaggle]: Kaggle Dataset. "Sample: Hand Wash Dataset". Disponível em: [Kaggle](https://www.kaggle.com/datasets/realtimear/hand-wash-dataset).