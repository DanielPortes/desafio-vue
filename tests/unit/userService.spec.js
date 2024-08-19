import { fetchUserData } from '@/services/userService';

// retorno
// 0 = Object {id: 1, username: "Alice"}
// 1 = Object {id: 2, username: "Bob"}
// 2 = Object {id: 3, username: "Charlie"}
// 3 = Object {id: 4, username: "David"}
// 4 = Object {id: 5, username: "Cathy"}


// Tarefa 2: Teste Função Assíncrona
global.fetch = jest.fn();

describe('userService', () => {
    describe('fetchUserData', () => {
        it('deve buscar usuários e filtrar os nomes que possuim a inicial C', async () => {
            const mockUsers = [
                { id: 1, username: 'Alice' },
                { id: 2, username: 'Bob' },
                { id: 3, username: 'Charlie' },
                { id: 4, username: 'David' },
                { id: 5, username: 'Cathy' }
            ];

            global.fetch.mockResolvedValueOnce({
                json: jest.fn().mockResolvedValueOnce(mockUsers)
            });

            const result = await fetchUserData();
            expect(result).toEqual([
                { id: 3, username: 'Charlie' },
                { id: 5, username: 'Cathy' }
            ]);
            expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
        });

        it('should return an empty array on error', async () => {
            global.fetch.mockRejectedValueOnce(new Error('Network error'));

            const result = await fetchUserData();
            expect(result).toEqual([]);
        });
    });
});