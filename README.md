# Cypress Inroduction: Advanced

## Workflow

1. Fork the repo.
1. Clone **your** forked repository.
1. Run the command `npm i`.
1. Create a new branch `git checkout -b testing`.
1. Resolve tasks in the `cypress`/`e2e`/`signUp.cy.js`.
1. Check yourself before submitting the task with a [Cypress checklist](https://mate-academy.github.io/qa-program/checklists/cypress.html).
1. Create a pull request.
1. Do not forget to click on `Re-request review` if you submit the homework after previous review.

## Task

App for testing: `https://react-redux.realworld.io`

**Your task** is to automate the next flow:

1. Go to "Sign Up" page.
1. Fill in username, email, and password fields using `generateUser` method.
1. Click on [Sign up] button.
1. Assert your username appeared in site navigation (header) menu.

To install `faker` plugin, run the command: `npm install faker@5.5.3`.
To use `faker` in your tests, go to `support`/`generate.js` file and write the next code:

```js
const faker = require('faker');

function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const username = faker.internet.userName() + '_' + randomNumber;
  const email = `${username}@mail.com`;
  const password = '12345Qwert!';

  return { email, password, username };
}

module.exports = { generateUser };
```

Now, you can generate a new user in your tests:

```js
const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should provide an ability to register new account', () => {
    const user = generateUser();
    
    <your_code>
  });
});
```
