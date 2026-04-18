# BLEACHGAS
The GAS of BLEACH

## Node.js について

このリポジトリは Google Apps Script (GAS) のプロジェクトですが、開発補助のために以下の Node.js ツール/パッケージを使用しています。

- **[clasp](https://github.com/google/clasp)**: ローカル環境から GAS のコードをデプロイ・管理するための CLI ツール（Node.js 製）
- **[@types/google-apps-script](https://www.npmjs.com/package/@types/google-apps-script)**: エディタ上で GAS の API 補完（IntelliSense）を有効にするための TypeScript 型定義

`node_modules/` はリポジトリには含まれていません（`.gitignore` で除外）。  
ローカルで使用する場合は `npm install` を実行してください。

## References
* [google/clasp](https://github.com/google/clasp)
