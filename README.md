![Image](https://github.com/user-attachments/assets/aa5710ab-4082-43e4-b1bd-afd88314d29a)
![Image](https://github.com/user-attachments/assets/6effccd2-c8f0-4fb4-9196-fdae4e6fca4c)

# ポケモンおみくじアプリ

**今日の運勢をポケモンで占うおみくじアプリケーション**

このアプリケーションは、ランダムに選ばれたポケモンと一緒に、今日の運勢を占うことができるおみくじです。

## ✨ 主な機能

- **おみくじを引く:** ボタンをクリックすると、今日のポケモンと運勢が表示されます。
- **結果をシェア:** 占いの結果を SNS などで簡単にシェアできます。(将来的に実装予定)

## 🚀 技術スタック

- **フレームワーク:** Next.js (App Router)
- **言語:** TypeScript
- **UI:** React
- **スタイリング:** Tailwind CSS
- **UI コンポーネント:** shadcn/ui (lucide-react, class-variance-authority, clsx, tailwind-merge を利用)
- **API** Poke API

## 🛠️ 開発環境のセットアップ

1.  **リポジトリをクローン:**
    ```bash
    git clone https://github.com/あなたのユーザー名/pokemon-omikuji.git
    cd pokemon-omikuji
    ```
2.  **依存パッケージのインストール:**
    ```bash
    npm install
    # または
    # yarn install
    # または
    # pnpm install
    ```
3.  **開発サーバーの起動:**
    ```bash
    npm run dev
    # または
    # yarn dev
    # または
    # pnpm dev
    ```
    ブラウザで `http://localhost:3000` を開きます。

## 📁 プロジェクト構成 (src ディレクトリ)

```
src
├── app/            # Next.js App Routerの各ページコンポーネント
├── components/     # 再利用可能なUIコンポーネント
│   ├── ui/         # shadcn/uiベースのコンポーネント
│   └── ...
├── lib/            # ユーティリティ関数など (例: shadcn/ui の utils.ts)
├── styles/         # グローバルなスタイル (例: globals.css)
└── ...             # その他、hooks, types, context など
```

---
