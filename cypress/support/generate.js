function generateUser() {
    const randomNumber = Math.random().toString().slice(2, 6)
    const username = `test_user-${randomNumber}`
    const email = `${username}@example.com`
    const password = 'test123456'

    return {email, password, username};
}

module.exports = { generateUser };




