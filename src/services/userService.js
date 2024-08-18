
// Tarefa 2: Função Assíncrona
export async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const users = await response.json();
        return users.filter(user => user.username.startsWith('C'));
    } catch (error) {
        console.error('Erro ao buscar dados dos usuários:', error);
        return [];
    }
}

// 0 = Object {id: 1, username: "Alice"}
// 1 = Object {id: 2, username: "Bob"}
// 2 = Object {id: 3, username: "Charlie"}
// 3 = Object {id: 4, username: "David"}
// 4 = Object {id: 5, username: "Cathy"}