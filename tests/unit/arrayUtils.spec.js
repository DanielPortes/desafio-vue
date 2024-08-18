import {countOccurrences, transformData} from '@/utils/arrayUtils';

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

