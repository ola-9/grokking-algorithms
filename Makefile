install:
	npm ci

test:
	npm run test

lint:
	npx eslint .

fix-lint:
	npx eslint . --fix
