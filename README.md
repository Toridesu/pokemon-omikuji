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
├── app/            # Next.js App Routerのルーティングとページコンポーネント
│   ├── (root)/     # ルートパス ("/") に対応するファイル群
│   │   └── page.tsx  # トップページ（おみくじを引く画面）のメインコンポーネント
│   ├── layout.tsx  # アプリケーション全体の共通レイアウトコンポーネント
│   ├── loading.tsx # ページやコンポーネントのローディング中に表示されるUI
│   ├── globals.css # グローバルなCSSスタイルシート
│   └── pokemon/    # "/pokemon" パスに関連するルーティング
│       └── [id]/   # 動的ルートセグメント (例: /pokemon/25 はピカチュウの詳細)
│           └── page.tsx # ポケモン詳細ページのコンポーネント (将来的に実装予定など)
├── components/     # 再利用可能なUIコンポーネント群
│   └── ui/         # shadcn/ui から導入したベースコンポーネント (例: Button, Card, Progress)
├── constants/      # アプリケーション全体で使われる定数
│   └── index.ts    # 定義を集約するファイル (例: APIのベースURL、ポケモンのID範囲など)
├── lib/            # 外部ライブラリの設定やユーティリティ
│   └── utils.ts    # shadcn/ui のユーティリティ関数 (tailwind-merge, clsx など)
├── types/          # TypeScriptの型定義
│   └── index.ts    # プロジェクト全体で使われる型定義を集約 (例: Pokemon型, ApiResponse型など)
├── utils/          # 汎用的なユーティリティ関数
│   └── api.tsx     # PokeAPIとの通信処理など、API関連の関数群
└── ...             # その他、必要に応じて追加されるディレクトリ (例: hooks, context)
```

---
