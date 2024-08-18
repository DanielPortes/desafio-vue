export function transformData(users) {
    return users
        .filter(user => user.isActive)
        .map(user => ({ id: user.id, name: user.name }))
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
