# eslint-n-bug

This repository showcases a bug in the "n/file-extension-in-import" ESLint rule.

Steps to reproduce:

```sh
git clone git@github.com:Zamiell/eslint-n-bug.git
cd eslint-n-bug
npm ci
npx eslint 
```

Even though I have "allowImportingTsExtensions" inside of my "tsconfig.json" file, the "file-extension-in-import" complains.
