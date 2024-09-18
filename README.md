# 2024 LINE LIFFアプリ　フロントエンド

## [ブログ記事：LINE×生成AI：チャットバトルゲームを作る！](https://tech-lab.sios.jp/archives/43089)

![「生成AI×LINE」で作るチャットゲーム](assets/title.png)

## 紹介

アプリケーションの紹介です。詳細は[こちらのブログ](https://tech-lab.sios.jp/archives/43089)を読んでもらえるとうれしいです。

### ゲームコンセプト

生成AIを使ってキャラクター同士を戦わせる公式LINEです。

![ゲームコンセプト](assets/game-concept.png)

### アーキテクト図

構成としてはAzureでの実装に寄っています。

![アーキテクト図](assets/architect.png)

データベースにFirestoreを使用しています。こちらは無料枠が結構あるので、小さなアプリケーションには最適です。

- [フロントエンド](https://github.com/Ryunosuke-Tanaka-sti/2024-line-liff-app-frontend)
- [バックエンド](https://github.com/Ryunosuke-Tanaka-sti/2024-line-liff-app-backend)

### 使用ライブラリ

詳細は、package.jsonをご覧ください。

## リポジトリについて

### ディレクトリ構造

全体のディレクトリ構造としては以下の様な構造になっています。

```txt
├─api                   # API処理
│  ├─Battle
│  ├─Enemy
│  └─User
├─assets                # 静的ファイル
├─components            # コンポーネント
│  ├─common
│  └─modules
├─hooks                 # Hooks
├─pages                 # 各ページ
│  └─layouts
├─router                # react-router定義（SPAのパス構造）
├─types                 # タイプ定義
└─utilities             # 汎用処理まとめ
```

#### API処理について




```bash

yarn install

cp .env.sample .env
# .env内の内容を自分の環境に書き換えてください

yarn dev

```
