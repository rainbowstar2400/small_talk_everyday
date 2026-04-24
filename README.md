# Small Talk Everyday

英語スピーキング課題を毎日自動配信するWebサービスです。

生徒が家に帰ってから、自動で課題が配信される。
その課題に答えることで、毎日英語に触れることができる。
教師側の追加労働ゼロで、生徒の英語力を伸ばす。

## 使っている技術

| 項目 | 内容 |
|---|---|
| フロント | Next.js（TypeScript） |
| ホスティング | AWS Amplify |
| DB | RDS（PostgreSQL）※準備中 |

## このリポジトリの構成

```
small_talk_everyday/
├── src/           … アプリのソースコード
├── public/        … 画像などの静的ファイル
├── docs/          … ドキュメント・仕様メモ・画面構成など
├── package.json   … 使用ライブラリの一覧
└── README.md      … このファイル
```

## 開発環境のセットアップ（自分のPCで動かしたい場合）

### 1. 必要なもの

- [Node.js](https://nodejs.org/)（LTS版を推奨）
- [Git](https://git-scm.com/)

### 2. リポジトリをクローン

```bash
git clone https://github.com/rainbowstar2400/small_talk_everyday.git
cd small_talk_everyday
```

### 3. ライブラリをインストール

```bash
npm install
```

### 4. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開くと、アプリが表示されます。

## デプロイ

mainブランチにpushすると、AWS Amplifyが自動でビルド・デプロイしてくれます。
特別な操作は不要です。

## ドキュメント

`docs/` フォルダに仕様メモや画面構成などの資料をまとめています。