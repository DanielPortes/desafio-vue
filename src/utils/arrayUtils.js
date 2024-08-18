export function transformData(users) {
    return users
        .filter(user => user.isActive)
        .map(user => ({id: user.id, name: user.name}))
        .sort((a, b) => a.name.localeCompare(b.name));
}

// Tarefa 3: Contagem de Ocorrências de cada palavra
export function countOccurrences(words) {
    return words.reduce((acc, word) => {
        acc[word] = acc[word] ? acc[word] + 1 : 1;
        return acc;
    }, {});
}

// Tarefa 4: Agrupamento de Objetos
export function groupByCategory(items) {
    return items.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});
}

// Tarefa 5: Mesclar Arrays de Objetos
export function mergeArrays(array1, array2) {
    const mergedMap = new Map();

    [...array1, ...array2].forEach(obj => {
        if (mergedMap.has(obj.id)) {
            mergedMap.set(obj.id, {...mergedMap.get(obj.id), ...obj});
        } else {
            mergedMap.set(obj.id, obj);
        }
    });

    return Array.from(mergedMap.values());
}