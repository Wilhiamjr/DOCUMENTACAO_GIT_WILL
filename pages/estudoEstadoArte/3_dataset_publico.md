---
title: Conjuntos de Dados Públicos
description: Descrição dos dados públicos e os resultados dos experimentos com os mesmos.
---
# Conjuntos de Dados Públicos

No decorrer do projeto, a coleta de dados foi realizada para garantir qualidade e padronização das imagens de treinamento.
 Entretanto, este é um processo que demandou tempo e autorização do Comitê de Ética e Pesquisa, por isso, enquanto os
 trâmites do mesmo eram realizados, foram utilizados dados públicos com o objetivo de entender melhor o problema de higienização
 de mãos no ponto de vista de aprendizado de máquina e construir a primeira versão do processo e dos modelos. Tais conjuntos
 de dados foram disponibilizadas de modo público por outros pesquisadores com a finalidade de pesquisa aberta. Como estes dados 
 possuem restrições de uso para fins comerciais, eles não foram utilizados para construir o algoritmo final.

Um resumo das características de cada base de dados pode ser visto na tabela abaixo. Ao longo das próximas seções, todas as bases
 que compõem o conjunto de dados simulado serão detalhadas.

| **Dataset**                                            | **Vídeos** | **Classes**         | **Ambientes** | **Pessoas**     | **Dimensão**    | **FPS** |
|--------------------------------------------------------|------------|---------------------|---------------|-----------------|-----------------|---------|
| Kaggle                                                 | 3504       | 12                  | 7             | 1               | 720x480         | 30      |
| Medical Education Technology Center                    | 212        | 6                   | 1             | 71              | 640x480         | 16      |
| Pauls Stradins Clinical University Hospital            | 3185       | 7                   | 9             | **              | 640x480, 320x240| 30      |
| Jurmala Hospital                                       | 2427       | 7                   | 4             | **              | 640x480         | 30      |
| Mivia Research Lab University of Salerno               | 74         | 10                  | Não informado | 53              | 640x480         | 15      |

**Tabela 1.** Características gerais dos conjuntos de dados.

**Vídeos capturados de diversos profissionais médicos em seu dia a dia de trabalho. A quantidade exata não foi informada.

## Kaggle

A base de dados **Kaggle** utilizada neste trabalho foi baixada da página "Sample: Hand Wash Dataset" [^kaggle]. A amostra liberada contém
 25 vídeos de lavagens de mãos divididos em 12 classes, uma para cada etapa da higienização de mãos, diferenciando mão esquerda e
  direita, resultando em 300 trechos de vídeo.

O conjunto foi criado pelo grupo da Universidade de Bangalore, Índia [^nagaraj], em diferentes ambientes para fornecer a maior variação
 possível. A variabilidade é importante para garantir que o modelo utilizado pelo grupo seja robusto e possa funcionar em diversos
  ambientes. Os parâmetros variados são:

- Iluminação
- Fundo
- Posição da câmera de origem
- Campo de visão
- Indivíduos que realizam a lavagem das mãos

Esses parâmetros foram escolhidos especificamente porque o conjunto Kaggle pretende simular as restrições do mundo real de uma aplicação
 potencial. Alguns exemplos das imagens podem ser vistos na figura abaixo.

![Exemplos dos 12 gestos (classes) presentes na base de dados. (Fonte: [^kaggle])](/estudoClinico/sampleHandWashing.png)
_Figura: Exemplos dos 12 gestos (classes) presentes na base de dados[^kaggle]._

## Medical Education Technology Center (METC)

A base **Medical Education Technology Center (METC)** [^METC] contém 212 vídeos e as anotações estão divididas em 6 classes válidas. 
 O conjunto de dados METC foi recolhido em 2021 no Centro de Tecnologia de Educação Médica, Universidade Riga Stradins (Riga, Letônia)
 com a participação de especialistas em saúde (funcionários da universidade médica, médicos, estudantes de medicina etc.) [^Zemlanuhina]. A 
 anotação foi feita em apenas uma pia, porém a higienização foi realizada por diversos estudantes, aumentando a variabilidade de pessoas.

Alguns exemplos das imagens podem ser vistos na figura abaixo.

![Amostras das 6 classes válidas presentes base de dados do METC.](/estudoClinico/metcSample.png)
_Figura: Amostras das 6 classes válidas presentes base de dados do METC._

O conjunto de dados consiste em arquivos de vídeo e suas respectivas anotações nos formatos CSV e JSON. Os dados estão organizados em uma
 estrutura de pastas composta por "DatasetN/Videos", "DatasetN/Annotations/AnnotatorN", summary.csv e statistics.csv, onde N corresponde
 a números hexadecimais representativos dos datasets e anotadores. Os arquivos summary.csv e stats.csv contém respectivamente um resumo
 sobre o conjunto de dados e um resumo sobre as principais métricas para cada episódio de lavagem das mãos[^Lulla].

Cada frame em cada vídeo foi anotado com as seguintes informações: 
 (i) se a lavagem das mãos estava visível no quadro
 (ii) a qual dos movimentos da OMS correspondia a lavagem das mãos (se houver correspondência).

Os arquivos CSV contém três colunas, sendo a primeira para indicar o tempo em segundos do quadro no vídeo, enquanto a segunda e terceira
 contém as informações (i) e (ii) apresentadas anteriormente. Os arquivos JSON contém um dicionário com diversas chaves, representando
 anotações de movimento para cada quadro e informações complementares sobre a qualidade da lavagem das mãos realizada no vídeo (como
 a presença de anéis, braçadeiras, relógios e unhas compridas)[^Lulla]. 

## Paul Stradings Clinical University Hospital

O conjunto de dados da **Pauls Stradins Hospital** [^Pauls] (PSKUS) foi coletado em 2020 em um dos maiores hospitais da Letônia, o Pauls Stradins
 Clinical University Hospital, e representa a higienização das mãos de diversos profissionais no seu dia a dia de trabalho. Há alta 
 variabilidade de iluminação e é muito comum encontrar imperfeições nos passos. Eles disponibilizaram um total de 3345 vídeos e as anotações
  estão divididas em 7 classes válidas, as mesmas seis do conjunto METC com a adição de enxugar as mãos com a toalha.

Alguns exemplos das imagens podem ser vistos na figura abaixo.

![Exemplos dos vídeos presentes na base de dados Pauls Stradins Hospital.](/estudoClinico/paulSample.png)
_Figura: Amostras das 7 classes v alidas presentes base de dados de Paul Stradins Hospital._

## Jurmala Hospital

A base de dados da **Jurmala Hospital** (Letônia) [^9] foi a última disponibilizada e contém a filmagem de higienização de mãos de vários 
 profissionais em seu dia a dia de trabalho, resultando em um total de 2427 vídeos anotados com as mesmas 7 classes válidas do conjunto anterior.

Este conjunto de dados faz parte de uma série de três conjuntos de dados (este e os conjuntos apresentados nas seções
 [METC](#medical-education-technology-center-metc) e  [Paul Stradings Clinical University Hospital](##paul-stradings-clinical-university-hospital)), 
 todos seguindo o mesmo formato, com a mesma estrutura de pastas e padrão para as anotações.

Alguns exemplos das imagens podem ser vistos na figura abaixo.

![Amostras das 7 classes válidas presentes base de dados de Jurmala Hospital.](/estudoClinico/JurmalaSample.png)
_Figura: Amostras das 7 classes válidas presentes base de dados de Jurmala Hospital._

## Surgical Hand Washing Dataset - MIVIA (Itália)

O conjunto de dados contém imagens de profundidade relacionadas ao procedimento cirúrgico de lavagem das mãos, segundo os gestos descritos pela
 Organização Mundial de Saúde (OMS, ou WHO, do inglês *World Health Organization*) em [^WHO]. Ele foi coletado com o apoio de professores do 
 Departamento de Medicina, Cirurgia e Odontologia da *“Schola Medica Salernitana”*, da Universidade de Salerno, Itália e descrito em [^greco2022deep].

Os voluntários apresentavam alturas diferentes, resultando em distâncias diferentes em relação à câmera. Eles foram treinados antes de realizar o
 procedimento e realizavam os gestos acompanhando um vídeo de cada gesto realizado. O procedimento inclui dez gestos diferentes (exemplos deles 
 podem ser vistos na figura abaixo).

![Exemplos dos 10 gestos (classes) presentes no dataset.](/estudoClinico/italiaSample.png)
_Figura: Exemplos dos 10 gestos (classes) presentes no dataset (definidas em [^greco2022deep])_

As imagens foram obtidas com o auxílio de uma câmera Intel® RealSense™ Depth Camera D435, que foi montada a 0,9m acima da pia, permitindo visualizar
 os movimentos das mãos e braços sem oclusões, com uma vista superior. A altura da câmera permitia captar integralmente a área de deslocamento dos 
 voluntários, mas as imagens foram cortadas para focar na região das mãos (região central das imagens originais) [^greco2022deep].

O conjunto de imagens foi originado a partir de 74 sequências de vídeo em profundidade, em que cada vídeo continha a sequência dos dez gestos e as 
 imagens (representadas em 16 bits) capturadas com resolução de 640 x 480, a 15 frames por segundo. Vale notar que cada pixel nas imagens representa 
 a distância do objeto em relação à câmera (em milímetros). Após processamento (corte e interpolação), as imagens finais do dataset possuem dimensão 
 de 170x170 [^greco2022deep].



---
[^kaggle]: Kaggle Dataset. "Sample: Hand Wash Dataset". Disponível em: [Kaggle](https://www.kaggle.com/datasets/realtimear/hand-wash-dataset).
[^nagaraj]: Nagaraj et al. "Real-time Action Recognition for Fine-Grained Actions and The Hand Wash Dataset", 2022.
[^METC]: Elsts, A. et al. "Hand Washing Video Dataset Annotated According to the World Health Organization's Handwashing Guidelines - METC Subset". 2021. DOI: 10.5281/zenodo.5808789.
[^Zemlanuhina]: Zemlanuhina, Olga, et al. "Influence of different types of real-time feedback on hand washing quality assessed with neural networks/simulated neural networks." SHS Web of Conferences. Vol. 131. EDP Sciences, 2022.
[^Lulla]: LULLA, Martins et al. Hand-washing video dataset annotated according to the world health organization’s hand-washing guidelines. Data, v. 6, n. 4, p. 38, 2021.
[^Pauls]: Elsts, A. (2021) “Hand Washing Video Dataset Annotated According to the World Health Organization's Handwashing Guidelines”. Zenodo. doi: 10.5281/zenodo.4537209.
[^jurmala]: Elsts, A. (2021) “Hand Washing Video Dataset Annotated According to the World Health Organization's Handwashing Guidelines - Jurmala Hospital Subset”. Zenodo. doi: 10.5281/zenodo.5808764.
[^WHO]: SAFETY, WHO Patient et al. WHO guidelines on hand hygiene in health care. World Health Organization, 2009.
[^greco2022deep]: GRECO, Antonio et al. A deep learning based system for handwashing procedure evaluation. Neural Computing and Applications, v. 35, n. 22, p. 15981-15996, 2023.