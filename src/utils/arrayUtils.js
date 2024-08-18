export function transformData(users) {
    return users
        .filter(user => user.isActive)
        .map(user => ({ id: user.id, name: user.name }))
        .sort((a, b) => a.name.localeCompare(b.name));
}