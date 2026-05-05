# 藤沢ロボリンクス Web Site

藤沢ロボリンクスの公式サイトです。Astro で構築し、GitHub Actions から GitHub Pages に自動公開します。

## 公開設定

- `main` ブランチへ push すると、`.github/workflows/pages.yml` が実行されます
- GitHub リポジトリの Settings > Pages で Source を `GitHub Actions` にしてください
- ビルド時は公開用の `base` と `site` を自動設定しています
- 公開先のベースURLは `https://fujisawa-robolinks.github.io/fujisawa-robolinks-site/` を想定しています

## SEO設定

- SEO対策済み（Google Search Consoleの確認HTML、robots.txt、sitemap.xml を `public/` に配置）
- トップページの title / meta description / OGP は `src/pages/index.astro` と `src/layouts/BaseLayout.astro` で管理

## まず覚えること

1. 編集対象は主に `src/pages` と `src/styles/global.css`
2. 画像は `public/` 配下に置くとそのまま公開対象になる
3. 非公開にしたい素材は Git に入れない
4. 編集後はローカル確認して、コミットして push する

## ローカル開発

1. 依存関係を入れる

```bash
npm ci
```

2. 開発サーバーを起動する

```bash
npm run dev
```

3. ブラウザで `http://localhost:4321` を開いて確認する

## 本番ビルド確認

```bash
npm run build
```

## フォルダの役割

- `src/pages`: 各ページ本体
- `src/layouts/BaseLayout.astro`: 共通ヘッダー・フッター
- `src/styles/global.css`: サイト全体の見た目
- `.github/workflows/pages.yml`: GitHub Pages の自動公開設定
- `public/album`: 活動アルバムの画像置き場

## 更新のしかた

### HOME

- `src/pages/index.astro` を編集

### 活動内容と実績

- `src/pages/activities.astro` を編集

### 問い合わせ

- `src/pages/contact.astro` を編集

### 活動アルバム

- `public/album` にイベント別フォルダを追加
- 画像を複数枚入れると、`src/pages/album.astro` が自動で拾います

### ブログ

- `src/pages/blog/index.astro` の `posts` 配列に記事を追加

## 画像運用の注意

- 公開ページに出す画像は、そのまま Web に公開されます
- 子どもの顔や動画の原本は GitHub に置かず、別管理にしてください
- 公開用にぼかしや低解像度化をした画像だけを `public/` に置く運用が安全です

## GitHub Pages の確認場所

- Actions タブ: ビルド成功・失敗の確認
- Settings > Pages: 公開元が `GitHub Actions` か確認

## セキュリティ設定（npm）

このプロジェクトでは `.npmrc` で次を有効化しています。

- `engine-strict=true`
- `ignore-scripts=true`
- `audit=true`
- `min-release-age=1`

## VS Code 推奨拡張

- Astro: `astro-build.astro-vscode`
- Prettier: `esbenp.prettier-vscode`
- ESLint: `dbaeumer.vscode-eslint`

