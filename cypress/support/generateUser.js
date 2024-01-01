function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 11);
  const userName = `Name${randomNumber}`;
  const email = `${userName}@gmail.com`;
  const password = `QWER${randomNumber}`;

  return {
    userName,
    email,
    password
  };
}

module.exports = { generateUser };
