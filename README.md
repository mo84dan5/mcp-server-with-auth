# mcp-server-with-auth

## 実行手順

### テスト実行
Full-Path-To-Your-Drectoryをご自分のディレクトリに修正して実行してください
`npx @modelcontextprotocol/inspector node Full-Path-To-Your-Drectory/mcp-server-with-auth/build/index.js`

### サーバー実行
`npm start`


## この環境の構築に利用したコマンド履歴
```sh
npm init -y
npm install @anthropic-ai/sdk @modelcontextprotocol/sdk dotenv
npm install -D @types/node typescript
mkdir build
mkdir src
touch src/index.ts
echo ".env" >> .gitignore
## package.json編集
## tsconfig.json追加
## src/index.ts編集
npm run build
npm start
```