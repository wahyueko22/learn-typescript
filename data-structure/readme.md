# How to setup project

npm init -y
npm install typescript --save-dev
npm i ts-node-dev --save-dev
npm install --save-dev jest ts-jest @types/jest // for unit test
npm install --save-dev eslint
npm install @typescript-eslint/eslint-plugin@latest --save-dev
npm install --save-dev prettier

# run test

npx jest

# run lint

npx eslint --fix .
