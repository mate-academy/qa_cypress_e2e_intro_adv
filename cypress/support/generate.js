const generateUser = () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  const userName = `Kristina${randomNumber}`;
  const email = `${userName}@gmail.com`;
  const password = '123456789';

  return { userName, email, password };
};

module.exports = { generateUser };
