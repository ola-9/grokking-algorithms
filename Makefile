install:
	npm ci

test:
	npm run test

single-test:
	npm test -- __tests__/binary-r-search.test.js

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

fix-lint:
	npx eslint . --fix

update-git-hooks:
	npx simple-git-hooks
