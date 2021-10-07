# employee-registration-cidenet

### Pre-Requirements 📋

_Have installed NodeJS and npm_

[NodeJS](https://nodejs.org/)

[npm](https://www.npmjs.com/)

[Docker](https://www.docker.com/)

## Important ⚙️
**It is important that the packages that are added to the project are installed using ``npm`` so that the ``package-lock.json`` is fed and the ``CI/CD`` process is much faster.**
___
_To maintain consistency in the code and commits, 2 hooks were added ``commit-msg`` y ``pre-commit``._ **_(This is configured automatically when installing the dependencies)_**

_1. **commit-msg** is in charge of verifying that each commit message complies with a given structure, below detailed explanation of the structure and how to use it._
_Commit structure_
```
git commit -m "type(scope?): subject"
```
_Example of a good commit:_ 
```
git commit -m "chore: add package express"
git commit -m "fix(server): send cors headers"
git commit -m "feat(blog): add comment section"
```
- **build:** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci:** Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **chore:** Other changes that don't modify src or test files
- **docs:** Documentation only changes
- **feat:** A new feature
- **fix:** A bug fix
- **perf:** A code change that improves performance
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **revert:** Reverts a previous commit
- **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test:** Adding missing tests or correcting existing tests

_2. **pre-commit** It is in charge of executing 3 scripts before confirming the commit, which are in charge of formatting the code, run tests and verifying the eslint rules._

### Installation 🔧

_1. Create the file containing the environment variables in the root of the project ``.env-cmdrc.json``._

_2. Rebuild the Node modules, we do it by executing one of the following commands while at the root of the project._

```
npm ci / npm install
```

_3. Run tests._

```
npm run test
```

_4. Create build._

```
npm run build
```

_5. Run the following command to run the app with docker_
```
docker-compose up -d
```

_6. Run the following command to import the database_
```
cat db.sql | docker exec -i employee-registration-cidenet-db psql -U root cidenet
```

_7. Local visit in_ [http://localhost:9000/api-docs/](http://localhost:9000/api-docs/) _or in the cloud in_ [https://api-employee-registration.herokuapp.com/api-docs](https://api-employee-registration.herokuapp.com/api-docs)

## Deployment 📦

_For the deploy, I wrote a pipeline that runs when committing to ``main``, it is important to add the following variables in the ``CI/CD`` section of gitlab._
```
HEROKU_APP_NAME
HEROKU_API_KEY
```
