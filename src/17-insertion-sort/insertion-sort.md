# Сортировка вставками

1. Начинаем со второго элемента, будем называть его текущим
2. Сравниваем текущий с каждым предыдущим элементом в отсортированной части массива
3. Если текущий элемент меньше, чем какой-либо элемент в отсортированной части, сдвигаем этот элемент вправо, чтобы освободить место для текущего элемента
4. Повторяем шаги 2-3, пока не найдем подходящее место для текущего, либо пока не дойдем до начала массива
5. Вставляем текущий элемент в найденное место
6. Переходим к следующему текущему элементу и повторяем все сначала

Пример:
1. Изначальный массив: [3, 1, 2]
2. current = 1, j = 0. 1 < 3 => сдвигаем 3, получаем [3, 3, 2]. вставляем current на своё место, получаем [1, 3, 2].
3. current = 2, j = 1. 2 < 3 => сдвигаем 3 вправо, получаем [1, 3, 3]. 2 > 1 => вставляем current на своё место, получаем [1, 2, 3].

**Time Complexity:** O(n^2)

**Space Complexity:** O(1)

**Когда использовать:** Может быть эффективнее других алгоритмов сортировки на небольших данных