install:
	npm ci

test:
	npm run test

lint:
	npx eslint .

fix-lint:
	npx eslint . --fix

update-git-hooks:
	npx simple-git-hooks
