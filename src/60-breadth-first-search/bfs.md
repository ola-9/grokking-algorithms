# Breadth-First Search

#graph #bfs #queue

Граф - это набор связей, который состоит из узлов и ребер. Узел может быть соединен с несколькими другими узлами. Эти узлы называются соседями.
Граф используются для моделирования связей между разными объектами.

Разновидность графа, в которой нет ребер, указывающих в обратном направлении называется деревом.


Два вопроса, на которые может ответить **алгоритм поиска в ширину**:
1. Существует ли путь от узла А к узлу В?
2. Как выглядит кратчайший путь от узла А к узлу В?

## Очередь

Работает точно также, как и в реальной жизни. Очереди похожи на стеки тем, что в них нельзя обращаться к произвольным элементам. Вместо этого поддерживается только 2 операции: постановка в очередь и извлечение из очереди.

Очередь - FIFO (first in first out)
Стек - LIFO (last in first out)

## Breadth-First Search (BFS)

это алгоритм поиска в графе или дереве, который начинает с исходной вершины (или узла) и постепенно исследует все смежные вершины на одном уровне, прежде чем переходить к вершинам следующего уровня. BFS обходит граф или дерево по уровням, начиная с корневой вершины.

**Время** выполнения

Время выполнения составляет как минимум О(количество ребер). Также в программе должна храниться очередь поиска. Добавление одно элемента в очередь выполняется за постоянное время О(1). Выполнение операции для каждого элемента потребует суммарного времени О(количество элементов). Поиск в ширину выполняется за время О(количество людей + количество ребер), что обычно записывается в форме J(V+E), где V - количество вершин, E - количество ребер.

**Варианты реализации**

Можно использовать Класс для создания абстракции графа. Это позволяет организовать код в более структурированном и модульном виде, что делает его более понятным и легко поддерживаемым.

Класс Graph инкапсулирует логику работы с графом, включая добавление вершин и ребер, а также выполнение алгоритма поиска в ширину. Путем использования класса можно создавать несколько инстансов графа с различными свойствами и методами, что облегчает многократное использование и изменение кода.

Также, использование класса способствует повторному использованию кода, упрощает его расширение и обеспечивает лучшую организацию программы.

**BFS Summary:**

* поиск в ширину позволяет определить, существует ли путь из А в В
* Если пусть существует, то поиск в ширину находит кратчайший путь
* Если в задаче требуется найти кратчайшее Х попробуйте смоделировать свою задачу графом и воспользуйтесь поиском в ширину для ее решения
* В направленном графе есть стрелки, а отношения действую в направлении стрелки
* В ненаправленных графах стрелок нет, а отношение идет в обе стороны
* Очереди относятся к категории FIFO
* Стек относится к категории LIFO
* Людей следует искать в порядке их добавления в список поиска, поэтому список должен быть оформлен в виде очереди, иначе найденный путь не будет кратчайшим
* Позаботьтесь о том, чтобы уже проверенный человек не проверялся заново, иначе может возникнуть бесконечный цикл
