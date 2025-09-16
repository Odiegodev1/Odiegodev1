
export const codigoC = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Árvore de Huffman</title>
</head>
<body>
   <h1>O uso de recursão e repetição no cálculo do fatorial</h1>

    <p>O fatorial é uma operação matemática fundamental, frequentemente utilizada em problemas de análise combinatória, algoritmos e estruturas de dados. Representado por <code>n!</code>, seu valor corresponde ao produto de todos os números inteiros positivos menores ou iguais a <code>n</code>. Por exemplo, <code>5! = 5 × 4 × 3 × 2 × 1 = 120</code>.</p>

    <p>No contexto da programação, o cálculo do fatorial é tradicionalmente empregado como exercício introdutório para a prática de lógica algorítmica. Há, basicamente, duas maneiras distintas de implementar esse cálculo: <strong>por meio de estruturas de repetição (iterativas)</strong> ou por <strong>recursão</strong>, que consiste na chamada da função por ela mesma. Cada uma dessas abordagens possui características próprias, com vantagens e desvantagens dependendo do cenário de aplicação.</p>

    <hr>

    <h2>1. Implementação com estrutura de repetição</h2>

    <p>A forma iterativa utiliza laços de repetição para acumular o resultado do produto dos números. A estrutura típica é um laço <code>for</code>, como no exemplo abaixo:</p>

    <pre>
<code>int Resultado = 1;
for (int i = 1; i <= n; i++) {
    Resultado *= i;
}</code>
    </pre>

    <p>Neste trecho, o cálculo inicia com o valor <code>1</code>, e, a cada iteração, esse valor é multiplicado pelo próximo número da sequência até atingir o número <code>n</code>. Essa abordagem é simples, linear e eficiente, pois todas as operações são realizadas sequencialmente dentro da função, sem chamadas adicionais ou sobrecarga de memória.</p>

    <p><strong>Vantagens da abordagem iterativa:</strong></p>
    <ul>
        <li>Utiliza pouca memória, já que não depende de chamadas empilhadas;</li>
        <li>Executa de forma rápida, mesmo para valores elevados de <code>n</code>;</li>
        <li>Possui estrutura de controle clara e de fácil depuração.</li>
    </ul>

    <p><strong>Desvantagens:</strong></p>
    <ul>
        <li>Embora eficiente, a solução pode ser menos intuitiva para problemas com definição naturalmente recursiva;</li>
        <li>Menos adaptável para problemas que exigem decomposição ou ramificações.</li>
    </ul>

    <hr>

    <h2>2. Implementação com recursividade</h2>

    <p>A recursividade é uma técnica poderosa na qual uma função chama a si mesma para resolver partes menores de um mesmo problema. No cálculo de fatorial, essa técnica pode ser aplicada da seguinte maneira:</p>

    <pre>
<code>if (n == 0 || n == 1)
    return 1;
else
    return n * RFatorial(n - 1);</code>
    </pre>

    <p>A lógica aqui se baseia na definição matemática do fatorial: <code>n! = n × (n - 1)!</code>. O algoritmo continua se chamando com <code>n - 1</code> até que o valor de <code>n</code> atinja o caso base (0 ou 1), quando então a função começa a retornar os valores acumulados.</p>

    <p><strong>Vantagens da abordagem recursiva:</strong></p>
    <ul>
        <li>O código é mais próximo da definição matemática do problema, tornando a lógica mais elegante;</li>
        <li>Ideal para problemas que naturalmente se dividem em subproblemas (como árvores, grafos, etc.);</li>
        <li>A solução recursiva favorece a clareza e simplicidade em alguns contextos.</li>
    </ul>

    <p><strong>Desvantagens:</strong></p>
    <ul>
        <li>Para valores grandes de <code>n</code>, há o risco de estouro da pilha (stack overflow);</li>
        <li>Cada chamada consome memória adicional, tornando a execução menos eficiente em termos de recursos;</li>
        <li>A depuração pode ser mais complexa, especialmente em casos com muitos níveis de recursão.</li>
    </ul>

    <hr>

    <h2>3. Comparação entre as abordagens</h2>

    <p>Embora ambas as implementações apresentem <strong>complexidade temporal linear (O(n))</strong>, a diferença fundamental está na <strong>complexidade espacial</strong>. A abordagem iterativa consome espaço constante (<code>O(1)</code>), enquanto a recursiva consome espaço proporcional ao valor de <code>n</code> (<code>O(n)</code>), por conta da pilha de chamadas.</p>

    <p>Além disso, a escolha entre uma abordagem ou outra deve considerar aspectos como:</p>
    <ul>
        <li>Clareza do código;</li>
        <li>Eficiência desejada;</li>
        <li>Tamanho da entrada;</li>
        <li>Limitações do ambiente de execução.</li>
    </ul>

    <p>Em contextos acadêmicos ou teóricos, a recursividade pode ser uma ferramenta de ensino valiosa, ajudando na compreensão de algoritmos complexos. Já em aplicações práticas, especialmente em sistemas com restrições de desempenho, a versão iterativa tende a ser preferida.</p>

    <hr>

    <h2>4. Considerações finais</h2>

    <p>A implementação do cálculo do fatorial utilizando repetição ou recursividade permite a reflexão sobre diferentes paradigmas de programação. Compreender essas abordagens vai além do problema em si, pois representa a base para o desenvolvimento de algoritmos mais sofisticados, que exigem decisões estratégicas sobre desempenho, clareza e consumo de recursos.</p>

    <p>Assim, mais do que apenas calcular o fatorial, esse exercício oferece uma excelente oportunidade para o aluno ou desenvolvedor entender como diferentes soluções impactam o funcionamento interno do programa. A escolha entre repetição e recursão deve sempre levar em consideração o equilíbrio entre legibilidade, desempenho e segurança da aplicação.</p>
`;


export const ArvoreHuffmanContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Árvore de Huffman</title>
</head>
<body>
    <h1>Árvore de Huffman: Estrutura e Aplicações</h1>

    <h2>Introdução</h2>
    <p>
        A Árvore de Huffman é uma estrutura de dados amplamente utilizada em compressão de dados. 
        Ela foi proposta por David A. Huffman em 1952 e é a base para o algoritmo de codificação de Huffman, 
        que permite reduzir o tamanho de arquivos, como textos e imagens, eliminando redundâncias.
    </p>

    <h2>O que é a Árvore de Huffman?</h2>
    <p>
        A Árvore de Huffman é uma árvore binária utilizada para criar códigos binários prefixados que minimizam o comprimento médio das palavras-código. 
        Ela é construída a partir da frequência dos símbolos em uma mensagem, de modo que símbolos mais frequentes recebem códigos mais curtos e símbolos menos frequentes, códigos mais longos.
    </p>

    <h2>Como funciona a construção da Árvore de Huffman?</h2>
    <ol>
        <li>Contar a frequência de cada símbolo na mensagem.</li>
        <li>Criar uma lista de nós, onde cada nó representa um símbolo com sua frequência.</li>
        <li>Selecionar os dois nós com menor frequência e combiná-los em um novo nó cuja frequência é a soma das duas.</li>
        <li>Repetir o processo até que reste apenas um nó, que será a raiz da árvore.</li>
    </ol>
    <p>Cada caminho da raiz até uma folha representa o código binário de um símbolo.</p>

    <h2>Exemplo</h2>
    <p>Suponha os símbolos A, B, C, D com frequências 5, 9, 12 e 13, respectivamente.</p>
    <ul>
        <li>Combinar A(5) e B(9) → nó com frequência 14.</li>
        <li>Combinar C(12) e D(13) → nó com frequência 25.</li>
        <li>Combinar os dois nós anteriores → nó raiz com frequência 39.</li>
    </ul>
    <p>Assim, os códigos gerados são atribuídos com base na posição dos símbolos na árvore.</p>

    <h2>Aplicações</h2>
    <p>A Árvore de Huffman é usada em:</p>
    <ul>
        <li>Compressão de texto (ex: ZIP)</li>
        <li>Compressão de imagens (ex: JPEG)</li>
        <li>Transmissão de dados eficiente</li>
    </ul>

    <h2>Conclusão</h2>
    <p>
        A Árvore de Huffman é uma ferramenta fundamental na área de compressão de dados, proporcionando uma maneira eficiente de codificar informações, 
        reduzindo espaço e aumentando a velocidade de transmissão.
    </p>`;

export const initialContentBig= ` <h1>A Importância da Notação Big O na Engenharia de Software</h1>
    <p><strong>Diego Santos</strong><br>
    Curso de Engenharia de Software</p>

    <h2>Resumo</h2>
    <p>
        A notação Big O é uma ferramenta fundamental na análise de algoritmos, permitindo que engenheiros de software compreendam e comparem a eficiência de diferentes soluções computacionais. Este artigo apresenta uma introdução clara e objetiva à notação Big O, abordando sua importância, exemplos práticos e implicações no desenvolvimento de software.
    </p>

    <h2>1. Introdução</h2>
    <p>
        No desenvolvimento de software, escolher o algoritmo certo pode ser a diferença entre uma aplicação eficiente e uma que consome muitos recursos. A notação Big O (ou O-grande) é usada para descrever o comportamento assintótico de algoritmos, ou seja, como o tempo de execução ou o uso de memória cresce à medida que o tamanho da entrada aumenta.
    </p>

    <h2>2. O que é a Notação Big O?</h2>
    <p>
        Big O é uma notação matemática que expressa o <strong>pior caso</strong> de desempenho de um algoritmo. Ela ignora constantes e termos de menor ordem, focando apenas no fator que mais influencia o crescimento do tempo de execução à medida que a entrada aumenta.
    </p>
    <p>Por exemplo:</p>
    <ul>
        <li><strong>O(1)</strong> – tempo constante (independe do tamanho da entrada)</li>
        <li><strong>O(n)</strong> – tempo linear (cresce proporcionalmente à entrada)</li>
        <li><strong>O(n²)</strong> – tempo quadrático (cresce ao quadrado do tamanho da entrada)</li>
        <li><strong>O(log n)</strong> – tempo logarítmico (eficiente em buscas)</li>
        <li><strong>O(n log n)</strong> – comum em algoritmos de ordenação eficientes</li>
    </ul>

    <h2>3. Exemplos Práticos</h2>

    <p><strong>Exemplo O(1):</strong></p>
    <pre><code class="language-python">def acessar_primeiro_elemento(lista):
    return lista[0]</code></pre>
    <p>Sempre acessa o primeiro item, independente do tamanho da lista.</p>

    <p><strong>Exemplo O(n):</strong></p>
    <pre><code class="language-python">def imprimir_todos(lista):
    for item in lista:
        print(item)</code></pre>
    <p>Precisa percorrer toda a lista.</p>

    <p><strong>Exemplo O(n²):</strong></p>
    <pre><code class="language-python">def pares_possiveis(lista):
    for i in lista:
        for j in lista:
            print(i, j)</code></pre>
    <p>Cada elemento é comparado com todos os outros.</p>

    <h2>4. Por que é importante na Engenharia de Software?</h2>
    <p>
        Engenheiros de software lidam com dados em diferentes volumes. Aplicações em larga escala exigem algoritmos eficientes. A notação Big O ajuda a prever gargalos e a otimizar o código, especialmente em sistemas embarcados, bancos de dados, inteligência artificial e aplicações web de alto desempenho.
    </p>

    <h2>5. Conclusão</h2>
    <p>
        Dominar a notação Big O é essencial para qualquer engenheiro de software. Ela permite projetar algoritmos mais eficientes, tomar decisões técnicas com base em desempenho e escrever código escalável. No contexto da Engenharia de Software, compreender o custo computacional de uma operação é tão importante quanto fazê-la funcionar.
    </p>

    <h2>Referências</h2>
    <ul>
        <li>Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). <em>Introduction to Algorithms</em>. MIT Press.</li>
        <li>Skiena, S. (2008). <em>The Algorithm Design Manual</em>. Springer.</li>
    </ul>
  `