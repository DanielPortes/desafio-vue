import {countOccurrences, groupByCategory, mergeArrays, transformData} from '@/utils/arrayUtils';

// Tarefa 1: Testar a função transformData
describe('arrayUtils', () => {
    describe('transformData', () => {
        it('deve filtrar usuários ativos, manter apenas id e nome e ordernar pelo nome', () => {
            const users = [
                {id: 1, name: 'Alice', age: 25, isActive: true},
                {id: 2, name: 'Bob', age: 30, isActive: false},
                {id: 3, name: 'Charlie', age: 22, isActive: true}
            ];
            const result = transformData(users);
            expect(result).toEqual([
                {id: 1, name: 'Alice'},
                {id: 3, name: 'Charlie'}
            ]);
        });
    });
});

// Tarefa 3: Testar Contagem de Ocorrências de cada palavra
describe('arrayUtils', () => {
    describe('countOccurrences', () => {
        it('deve contar a ocorrência de cada palavra', () => {
            const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
            const result = countOccurrences(words);
            expect(result).toEqual({
                apple: 3,
                banana: 2,
                orange: 1
            });
        });
    });
});

// Tarefa 4: Testar Agrupamento de Objetos
// entrada:
//
// const items = [
//     { name: 'apple', category: 'fruit' },
//     { name: 'carrot', category: 'vegetable' },
//     { name: 'banana', category: 'fruit' },
//     { name: 'broccoli', category: 'vegetable' }
// ];

describe('groupByCategory', () => {
    it('deve agrupar objetos por categoria', () => {
        const items = [
            {name: 'apple', category: 'fruit'},
            {name: 'carrot', category: 'vegetable'},
            {name: 'banana', category: 'fruit'},
            {name: 'broccoli', category: 'vegetable'}
        ];
        const result = groupByCategory(items);
        expect(result).toEqual({
            fruit: [
                {name: 'apple', category: 'fruit'},
                {name: 'banana', category: 'fruit'}
            ],
            vegetable: [
                {name: 'carrot', category: 'vegetable'},
                {name: 'broccoli', category: 'vegetable'}
            ]
        });
    });
});

// Tarefa 5: Testar Mesclar Arrays de Objetos
describe('mergeArrays', () => {
    it('should merge two arrays of objects based on id', () => {
        const array1 = [
            {id: 1, name: 'Alice', age: 25},
            {id: 2, name: 'Bob', age: 30}
        ];
        const array2 = [
            {id: 1, age: 26, email: 'alice@example.com'},
            {id: 3, name: 'Charlie', age: 22}
        ];
        const result = mergeArrays(array1, array2);
        expect(result).toEqual([
            {id: 1, name: 'Alice', age: 26, email: 'alice@example.com'},
            {id: 2, name: 'Bob', age: 30},
            {id: 3, name: 'Charlie', age: 22}
        ]);
    });
});