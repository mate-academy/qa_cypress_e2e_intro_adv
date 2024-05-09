const generateUser = () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  const userName = `max-power${randomNumber}`;
  const email = `${userName}@gmail.com`;
  const password = 'Qwer123@';

  return { userName, email, password };
};

module.exports = { generateUser };
