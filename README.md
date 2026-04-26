# 藤沢ロボリンクス HP 運用ガイド

このプロジェクトは、GitHub Pages で公開する Astro サイトです。
HTML/Markdown の経験があれば、Astro や JavaScript に詳しくなくても更新できるように運用手順をまとめています。

現在は「藤沢ロボリンクス」（藤沢市拠点・小中学生向け）の公式HPとして作り込みを進めています。

## このサイトの運用方針

- 活動の通常更新は Instagram が中心
- ブログは大きな大会レポートのみ掲載
- 多言語化や大会特設ページは当面作らない
- 写真投稿が増える前提で、更新しやすい構成にする

## まず覚えること（最小）

1. ページ本文の更新は、ほぼ HTML と同じ書き方で対応できる
2. 普段触るのは src/pages の中だけでよい
3. 編集後はローカル確認して、GitHubへ push すると公開される

## フォルダの意味

- src/pages: 各ページ本体
- src/layouts/BaseLayout.astro: 全ページ共通のヘッダー・フッター
- src/styles/global.css: 色や余白などの全体デザイン
- .github/workflows/pages.yml: GitHub Pages 自動公開設定
- planning/技術選定メモ.md: 方針メモ

## どのファイルを更新すればよいか

- HOME: src/pages/index.astro
- 活動内容と実績: src/pages/activities.astro
- 問い合わせ: src/pages/contact.astro
- 活動アルバム: src/pages/album.astro
- ブログ一覧: src/pages/blog/index.astro

## 初回セットアップ（PCごとに1回）

1. Node.js 20系をインストール
2. このフォルダを VS Code で開く
3. 推奨拡張機能をインストール
4. ターミナルで次を実行

npm install

## 更新作業の基本フロー（毎回これだけ）

1. ターミナルで開発サーバー起動

npm run dev

2. ブラウザで http://localhost:4321 を開く
3. 必要なページファイルを編集
4. 保存してブラウザ表示を確認
5. 問題なければ Git へコミットして push

main ブランチへ push すると GitHub Actions が自動でビルドし、GitHub Pages が更新されます。

## VS Codeでプレビューしながら開発する手順

1. VS Codeでこのフォルダを開く
2. ターミナルで `npm run dev` を実行
3. コマンドパレットから `Simple Browser: Show` を選ぶ
4. URL に `http://localhost:4321` を入力
5. エディタとSimple Browserを左右に並べて編集・確認する

補足:

- Astro は保存時に自動リロードされるため、保存するだけでプレビュー更新されます
- 外部ブラウザで確認する場合は通常どおり `http://localhost:4321` を開いて問題ありません
- 本番ビルド確認は `npm run build` で行います

## 現在のサイト反映済み情報（2026-04-24時点）

- チーム名: 藤沢ロボリンクス
- 拠点: 藤沢市（藤沢駅近郊）
- 対象: 小学生・中学生
- 活動日: 月2回（第2・第4土曜日）
- SNS: Instagram（https://www.instagram.com/fujisawa_robolinks?igsh=MXMxNmJmNTdyZ24zZA==）

## 更新パターン別の手順

### 1) Instagramリンクを更新する

1. src/pages/activities.astro を開く
2. Instagram の URL を変更
3. 保存して表示確認

現在の公式URL:

- https://www.instagram.com/fujisawa_robolinks?igsh=MXMxNmJmNTdyZ24zZA==

### 2) 大会ブログを1件追加する

1. src/pages/blog/index.astro を開く
2. posts 配列に1件追加（タイトル、日付、要約）
3. 保存して表示確認

### 3) アルバム写真を更新する

1. `public/album` の中に、イベントごとのサブディレクトリを作る
2. 各サブディレクトリへ画像を複数枚入れる
3. 保存して `/album` の表示を確認する

例:

- ディレクトリ: `public/album/2026-04_定期練習/`
- 画像ファイル: `public/album/2026-04_定期練習/01.jpg`, `02.jpg`, `03.jpg`
- ディレクトリ: `public/album/2026-04_オフショット/`（ミーティング写真がない場合の雑感・雰囲気写真）

補足:

- `src/pages/album.astro` は `public/album` を自動検出するため、通常は配列編集不要です
- サブディレクトリ1つが、HP上のスライド枠1つとして表示されます
- 同じ枠の中で画像が自動で切り替わります

### 4) チームアイコンを更新する

1. `public/assets/team-icon.png` を新しいアイコンで置き換える
2. 保存してヘッダー・HOME・ブラウザタブのアイコン表示を確認する

補足:

- 現在、チームアイコンは共通ヘッダー / HOMEページ / ファビコンで使用しています

## Astro を使うときの理解ポイント（最小限）

- Astro ファイルは、上部が設定、下部が表示内容
- 普段は表示内容だけ編集して問題ない
- JavaScript の複雑な実装は不要

## トラブル時の確認順

1. npm install を実行済みか
2. npm run dev 実行中か
3. 編集ファイルが src/pages 配下か
4. push 先が main ブランチか
5. GitHub の Actions タブで失敗有無を確認

## セキュリティ設定（npm）

このプロジェクトでは .npmrc で以下を有効化しています。

- engine-strict=true
- ignore-scripts=true
- audit=true
- min-release-age=1

## 推奨 VS Code 拡張

- Astro: astro-build.astro-vscode
- Prettier: esbenp.prettier-vscode
- ESLint: dbaeumer.vscode-eslint

## 公開手順（再掲）

1. 編集内容をコミット
2. GitHub へ push
3. Actions 完了後にサイト反映を確認

