---
title: "AWSのAIエディタKiroを触ってみた"
emoji: "🐈"
type: "tech" # tech: 技術記事 / idea: アイデア
topics: ["AI", "AWS", "Kiro", "JavaScript", "TypeScript"]
published: true
---

## Kiroとは

- Kiroは「vibe codingをviable codeへ」と進化させるAIエージェント搭載のIDE
- 2025年7月にAWSがリリースした
- VSCodeライクのエディタで、AIの仕様駆動開発が魅力

https://kiro.dev/

### 料金体系

現状（2025/7/17）の料金体系は以下のようです。

https://kiro.dev/pricing/

- `KIRO FREE`
    - インタラクションが50回まで
    - SpecsやAgent hooksなどの基本機能は使用可能
- `KIRO PRO`
    - インタラクションが1000回まで
- `KIRO PRO+`
    - インタラクションが3000回まで

FREE版で機能の制限等はなく、PROやPRO+にすることでインタラクション回数を増やすことができるようです。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/a56b20e8-6eb7-47b4-b919-c66299cbf1a8.png)


## インストール方法

- https://kiro.dev/ にアクセスします

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/609ccd38-7e52-46ff-87c9-aac5a52311f5.png)

- **Downloads** から自分の環境にあったインストーラーを選びます

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/d7c8a141-41fc-4ffa-9c6d-05d6f93c6ff9.png)

### Windows

- **同意する** にチャックを付けて **次へ** を押下します

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/588656a4-4b25-4631-bdeb-4cb3b59c92d2.png)

- **インストール先のファルダ** を指定して、 **次へ** を押下します

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/8e7d2eee-9981-46ab-a3e0-6709f7e0ca63.png)

- **スタートメニューファルダ** を指定して、 **次へ** を押下します

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/c3badabf-bfa3-458f-a3b5-3cd16f7c4298.png)

- 以下のチェックボックスにチェックを付けて **次へ** を押下します

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/a041d480-b042-4c5e-b449-6f780a1c68df.png)

- **インストール** を押下します

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/28dba1a8-01a1-48c6-aff9-616c5b5abe28.png)

- **完了** を押下します

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/b6e5482b-7cc8-455f-8d92-ac1524de8c22.png)

- kiroが起動すれば成功です

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/6ec494be-8529-4c68-9b04-284823af6b52.png)

- PowerShellなどで `kiro .` コマンドを使用してエディタを開くことができます

```
kiro .
```

### Mac

- Homebrewの https://formulae.brew.sh/cask/kiro にアクセスします

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/05249a77-6def-4cc3-b6fd-a31a1ca00461.png)

- 以下コマンドでインストールします

```
brew install --cask kiro
```

- アプリケーションから `Kiro.app` を開けたら成功です

### Linux

- `wget` コマンドで `202507161954-distro-linux-x64.deb` をダウンロードします
    - ※ wget がない場合：`sudo apt update && sudo apt install wget`

```
wget https://prod.download.desktop.kiro.dev/releases/202507161954--distro-linux-x64-deb/202507161954-distro-linux-x64.deb
```

- `.deb` ファイルをインストール

```
sudo dpkg -i 202507161954-distro-linux-x64.deb
```

- `kiro .` コマンドを使用してエディタを開くことができれば成功です

```
kiro .
```

## Kiroのセットアップ

- 以下のいずれかでサインインする必要があります
    - Googleアカウント
    - GitHubアカウント
    - AWS Builder ID
    - AWS IAM Identity Center

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/6ec494be-8529-4c68-9b04-284823af6b52.png)

- VSCodeの設定をインポートできます

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/e0bda324-79ff-4d81-9638-da54304a92d8.png)

- エディタのテーマを選択します

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/64c6bf19-18b7-47fa-9a3c-43cd0ed169ef.png)

- Shellのセットアップができます

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/add24fee-409e-451e-af0b-fc2c14f062ab.png)

- エディタ画面が表示されれば成功です

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/76b4f6ad-bdab-4ebe-a3a3-2988ed8ce79c.png)

- `Change Language Restart` を押下すると再起動して日本語になります

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/09c4156a-7c15-4235-8d0d-437c71b5242b.png)

## Kiroを触ってみる

- `Ctrl + L` で `Chat Panel` が開きます
    - デフォルトの選べるモデルは `Claude Sonnet 4.0` と `Claude Sonnet 3.5` でした

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/8c967441-af21-407b-afee-163e03d8373e.png)

- Specでは、要件を入力する段階なので以下のようなプロンプトを渡してみました

```
Webで操作ができる簡単なToDoリストアプリを作成したい。
```

- Kiroが `要件文書（requirements.md）` の作成を行ってくれます
    - `.kiro/specs/web-todo-app` 配下にMarkdownファイルを作成してくれるようです

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/ab46514a-07f9-4156-82df-55e07371b6cf.png)

Kiroの作成した `requirements.md` は以下の通りです。

<details><summary>requirements.md</summary>

# 要件文書

## 概要

ユーザーがWebブラウザ上でタスクを管理できる簡単なToDoリストアプリケーションです。基本的なCRUD操作（作成、読み取り、更新、削除）を提供し、直感的で使いやすいインターフェースを持ちます。

## 要件

### 要件 1: タスクの作成

**ユーザーストーリー:** ユーザーとして、新しいタスクを追加したいので、やるべきことを記録できる

#### 受け入れ基準

1. WHEN ユーザーがタスク入力フィールドにテキストを入力し送信ボタンをクリック THEN システムは新しいタスクをリストに追加する
2. WHEN ユーザーが空のタスクを送信しようとする THEN システムはエラーメッセージを表示し、タスクを追加しない
3. WHEN タスクが正常に追加される THEN システムは入力フィールドをクリアする

### 要件 2: タスクの表示

**ユーザーストーリー:** ユーザーとして、すべてのタスクを一覧で見たいので、何をする必要があるかを把握できる

#### 受け入れ基準

1. WHEN ユーザーがアプリにアクセスする THEN システムはすべてのタスクをリスト形式で表示する
2. WHEN タスクリストが空の場合 THEN システムは「タスクがありません」というメッセージを表示する
3. WHEN 新しいタスクが追加される THEN システムはリストを即座に更新する

### 要件 3: タスクの完了マーク

**ユーザーストーリー:** ユーザーとして、タスクを完了としてマークしたいので、進捗を追跡できる

#### 受け入れ基準

1. WHEN ユーザーがタスクのチェックボックスをクリック THEN システムはタスクを完了状態に変更する
2. WHEN タスクが完了状態の場合 THEN システムはタスクテキストに取り消し線を表示する
3. WHEN 完了済みタスクのチェックボックスを再度クリック THEN システムはタスクを未完了状態に戻す

### 要件 4: タスクの削除

**ユーザーストーリー:** ユーザーとして、不要なタスクを削除したいので、リストを整理できる

#### 受け入れ基準

1. WHEN ユーザーがタスクの削除ボタンをクリック THEN システムはそのタスクをリストから削除する
2. WHEN タスクが削除される THEN システムはリストを即座に更新する
3. WHEN 削除操作が実行される THEN システムは確認なしで即座に削除する

### 要件 5: データの永続化

**ユーザーストーリー:** ユーザーとして、ページを再読み込みしてもタスクが保持されていてほしいので、作業を失わない

#### 受け入れ基準

1. WHEN ユーザーがタスクを追加、更新、削除する THEN システムはローカルストレージにデータを保存する
2. WHEN ユーザーがページを再読み込みする THEN システムは保存されたタスクを復元して表示する
3. IF ローカルストレージにデータが存在しない THEN システムは空のタスクリストを表示する

### 要件 6: レスポンシブデザイン

**ユーザーストーリー:** ユーザーとして、モバイルデバイスでもアプリを使いたいので、どのデバイスからでもアクセスできる

#### 受け入れ基準

1. WHEN ユーザーがモバイルデバイスでアクセスする THEN システムは画面サイズに適応したレイアウトを表示する
2. WHEN 画面幅が768px以下の場合 THEN システムはモバイル向けのレイアウトを適用する
3. WHEN ユーザーがタッチデバイスを使用する THEN システムはタッチ操作に適したボタンサイズを提供する

</details>

- 次に `Move to design phase` を押下します
- Kiroが `設計文書（design.md）` の作成を行ってくれます

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/2bd1cb1a-fbaf-4228-a4fe-b7641e9a6ae5.png)

:::note warn
今回はKiroの作成した技術スタックにReactを使用するよう指摘を加えてみました
:::

- 以下がKiroの作成した技術スタックです

```md:技術スタック
### 技術スタック
- **フロントエンド**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **データストレージ**: ブラウザのLocalStorage API
- **スタイリング**: CSS Grid/Flexbox、メディアクエリ
- **デプロイメント**: 静的ファイルとして任意のWebサーバーで配信可能
```

- 以下が指摘プロンプトです

```md:プロンプト
技術スタックについてはReactを使用し、スタイリングについてはMUIを使用するようにしてください。
```

指摘の反映を行ってKiroの作成した `design.md` は以下の通りです。

<details><summary>design.md</summary>

# 設計文書

## 概要

WebベースのToDoリストアプリケーションは、React 18とMaterial-UIを使用したモダンなSPA（Single Page Application）として実装されます。TypeScriptによる型安全性を確保し、ローカルストレージを使用してデータを永続化し、MUIのレスポンシブシステムでモバイルデバイスにも対応します。

## アーキテクチャ

### 技術スタック
- **フロントエンド**: React 18+ with TypeScript
- **UIライブラリ**: Material-UI (MUI) v5
- **状態管理**: React Hooks (useState, useEffect)
- **データストレージ**: ブラウザのLocalStorage API
- **ビルドツール**: Vite
- **デプロイメント**: 静的ファイルとして任意のWebサーバーで配信可能

### アーキテクチャパターン
- **コンポーネントベース**: 再利用可能なReactコンポーネント
- **カスタムフック**: ビジネスロジックの分離とテスタビリティ向上
- **イベント駆動**: ユーザーインタラクションに基づくリアクティブな更新

## コンポーネントとインターフェース

### 1. App コンポーネント
```typescript
interface AppProps {}

const App: React.FC<AppProps> = () => {
  // メインアプリケーションコンポーネント
  // テーマプロバイダーとレイアウトを管理
}
```

### 2. TodoApp コンポーネント
```typescript
interface TodoAppProps {}

const TodoApp: React.FC<TodoAppProps> = () => {
  // タスク状態管理とメインロジック
  // useTasks カスタムフックを使用
}
```

### 3. TaskForm コンポーネント
```typescript
interface TaskFormProps {
  onAddTask: (text: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  // MUI TextField と Button を使用
  // フォーム送信とバリデーション処理
}
```

### 4. TaskList コンポーネント
```typescript
interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask, onDeleteTask }) => {
  // MUI List コンポーネントを使用
  // タスクリストの描画と空状態の処理
}
```

### 5. TaskItem コンポーネント
```typescript
interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  // MUI ListItem, Checkbox, IconButton を使用
  // 個別タスクの表示と操作
}
```

### 6. useTasks カスタムフック
```typescript
interface UseTasks {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  loading: boolean;
  error: string | null;
}

const useTasks = (): UseTasks => {
  // タスクの状態管理とLocalStorage操作
  // ビジネスロジックの集約
}
```

### 7. useLocalStorage カスタムフック
```typescript
const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
  // LocalStorage の読み書き処理
  // エラーハンドリングとシリアライゼーション
}
```

## データモデル

### Task オブジェクト
```javascript
{
  id: string,           // ユニークID（UUID v4）
  text: string,         // タスクのテキスト
  completed: boolean,   // 完了状態
  createdAt: Date      // 作成日時
}
```

### LocalStorage スキーマ
```javascript
// キー: 'todoApp_tasks'
// 値: Task オブジェクトの配列をJSON文字列化したもの
localStorage.setItem('todoApp_tasks', JSON.stringify(tasks))
```

## UI/UX 設計

### レイアウト構造
```
┌─────────────────────────────────┐
│           ヘッダー              │
│        "ToDoリスト"             │
├─────────────────────────────────┤
│     タスク入力フォーム          │
│  [入力フィールド] [追加ボタン]   │
├─────────────────────────────────┤
│         タスクリスト            │
│  ☐ タスク1              [削除]  │
│  ☑ タスク2（完了）       [削除]  │
│  ☐ タスク3              [削除]  │
└─────────────────────────────────┘
```

### MUIテーマ設定
- **レスポンシブブレークポイント**: MUIのデフォルトブレークポイントを使用
  - xs: 0px以上（モバイル）
  - sm: 600px以上（タブレット）
  - md: 900px以上（デスクトップ）
- **コンテナ**: Container コンポーネントで最大幅を制御
- **グリッドシステム**: Grid コンポーネントでレスポンシブレイアウト

### MUIテーマカスタマイズ
```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // MUIデフォルトブルー
    },
    secondary: {
      main: '#dc004e', // MUIデフォルトピンク
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '600px',
        },
      },
    },
  },
});
```

## エラーハンドリング

### クライアントサイドエラー
1. **空のタスク送信**: 入力検証でエラーメッセージ表示
2. **LocalStorage エラー**: try-catch でキャッチし、コンソールログ出力
3. **DOM 操作エラー**: 要素存在チェックとエラーハンドリング

### エラー表示方法
- インライン検証メッセージ（入力フィールド下部）
- 一時的な通知バナー（3秒後に自動消去）

## テスト戦略

### 単体テスト
- **TaskModel**: データ操作とJSON変換のテスト
- **TaskStorage**: LocalStorage操作のテスト
- **TaskController**: ビジネスロジックのテスト

### 統合テスト
- **フォーム送信**: タスク追加フローの完全テスト
- **データ永続化**: ページリロード後のデータ復元テスト
- **UI インタラクション**: クリックイベントとDOM更新のテスト

### E2Eテスト
- **基本フロー**: タスクの追加→完了→削除の一連の操作
- **レスポンシブ**: 異なる画面サイズでの動作確認
- **データ永続化**: ブラウザリフレッシュ後の状態確認

### テストツール
- **Jest**: 単体テスト・統合テストフレームワーク
- **jsdom**: DOM環境のシミュレーション
- **Manual Testing**: レスポンシブデザインとブラウザ互換性

## セキュリティ考慮事項

### XSS 対策
- ユーザー入力のHTMLエスケープ処理
- innerHTML の代わりに textContent を使用

### データ検証
- クライアントサイドでの入力長制限（最大200文字）
- 特殊文字の適切な処理

## パフォーマンス最適化

### DOM 操作の最適化
- DocumentFragment を使用した効率的なDOM更新
- イベントデリゲーションによるメモリ使用量削減

### データ管理
- LocalStorage の容量制限考慮（5MB上限）
- 大量タスク時の仮想スクロール（将来的な拡張）

</details>

ついでに `タスクリスト（tasks.md）` も作成してくれました。

Kiroの作成した `tasks.md` は以下の通りです。

<details><summary>tasks.md</summary>

# 実装計画

- [ ] 1. プロジェクト構造のセットアップ
  - Viteを使用してReact + TypeScriptプロジェクトを初期化
  - Material-UIのインストールと基本設定
  - プロジェクトディレクトリ構造の作成
  - _要件: 全体_

- [ ] 2. データモデルとインターフェースの実装
  - [ ] 2.1 Taskインターフェースの定義
    - id, text, completed, createdAtプロパティを持つTaskインターフェースを作成
    - _要件: 1, 2, 3, 4, 5_

  - [ ] 2.2 LocalStorageユーティリティの実装
    - useLocalStorageカスタムフックの作成
    - データの保存と取得のロジック実装
    - エラーハンドリングの追加
    - _要件: 5_

- [ ] 3. コアロジックの実装
  - [ ] 3.1 useTasksカスタムフックの作成
    - タスク状態管理の実装
    - タスク追加機能の実装
    - タスク完了状態切り替え機能の実装
    - タスク削除機能の実装
    - LocalStorageとの連携
    - _要件: 1, 3, 4, 5_

  - [ ] 3.2 useTasksフックのテスト作成
    - タスク操作のユニットテスト実装
    - LocalStorage操作のモック
    - _要件: 1, 3, 4, 5_

- [ ] 4. UIコンポーネントの実装
  - [ ] 4.1 Appコンポーネントの作成
    - MUIテーマプロバイダーの設定
    - レスポンシブレイアウトの基本構造実装
    - _要件: 6_

  - [ ] 4.2 TaskFormコンポーネントの実装
    - 入力フォームとボタンの作成
    - バリデーションロジックの実装
    - 送信イベントハンドリング
    - _要件: 1_

  - [ ] 4.3 TaskListコンポーネントの実装
    - タスクリストの表示ロジック
    - 空の状態の処理
    - _要件: 2_

  - [ ] 4.4 TaskItemコンポーネントの実装
    - 個別タスクの表示
    - 完了状態の切り替え機能
    - 削除機能
    - _要件: 2, 3, 4_

- [ ] 5. レスポンシブデザインの実装
  - [ ] 5.1 MUIブレークポイントの設定
    - モバイル向けレイアウト調整
    - タッチフレンドリーなUI要素のサイズ調整
    - _要件: 6_

  - [ ] 5.2 レスポンシブテストの実装
    - 異なる画面サイズでのレイアウトテスト
    - _要件: 6_

- [ ] 6. エラーハンドリングの実装
  - [ ] 6.1 入力バリデーションの強化
    - 空の入力チェックとエラーメッセージ表示
    - _要件: 1_

  - [ ] 6.2 LocalStorageエラー処理
    - ストレージ容量制限の処理
    - 読み書きエラーのハンドリング
    - _要件: 5_

- [ ] 7. 統合テストの実装
  - [ ] 7.1 コンポーネント統合テスト
    - フォーム送信からリスト表示までの統合テスト
    - _要件: 1, 2_

  - [ ] 7.2 データ永続化テスト
    - ページリロード後のデータ復元テスト
    - _要件: 5_

- [ ] 8. 最終調整とパフォーマンス最適化
  - [ ] 8.1 コードのリファクタリングと最適化
    - 不要なレンダリングの削減
    - メモ化によるパフォーマンス向上
    - _要件: 全体_

  - [ ] 8.2 最終的なUIポリッシュ
    - アニメーションとトランジションの追加
    - 視覚的一貫性の確保
    - _要件: 全体_

</details>

- 次にKiroにタスクの実行を行ってもらいます
    - `tasks.md` の `Start Task` から実行できます

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/8bdabc2d-6fee-4c55-aaad-160e1ee646c3.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/071bd979-1d54-45df-a98b-3a34dff4b288.png)

- タスク実行中はコマンドの実行時に確認が入るようです
    - `RUN` ボタンまたは `Accept Command` ボタンを押下することでコマンド実行をしてくれました

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/2a18c81b-56e9-4c48-85cb-69ebc4914d0b.png)

 - コマンドでエラーが出た際もコンソールの出力を確認して自己解決してくれるようです

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/28f91304-bf0b-42d7-b1d9-ca93f96550b9.png)

- タスクの実行中は `tasks.md` を見るとどのタスクを着手中か視覚的にわかるようになっていました

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/311b4f95-53f3-4237-91a8-9b924a8c8f3f.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/6a26a5bb-31f9-4bc3-87f5-e8a20026e3c2.png)

- 出来上がったアプリは以下です
    - レスポンシブなデザインなはずなのに余白がかなりあります
    - また、機能としては最低限でタスクの追加と完了、削除しかできません

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/45d37c5b-e6bd-4858-b150-d70449401a55.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/449867/0162a868-f70a-4edc-bdcf-df310463d555.png)

## 感想

Kiroを使用してみて以下のような点が気になりました。

- 予期せぬエラーが頻発する
    - `An unexpected error occurred, please retry.` が多発
    - なぜか初回実行時のタスクは失敗する
    - 何回かRetryするとうまくいく
- タスクの順番がおかしい
    - リスト作ってからアイテムの作成するタスクがあり、手戻り発生の要因になっている
- 途中からAIのチャットが英語になる
- テストコード作成はエラー＆タスク失敗のオンパレード

気になる点は多々ありますが、AIが仕様を理解して開発してくれる仕様駆動開発はある程度品質が保証されているように思いました。（機能的な意味で、、、）

また、AIの提案する設計をイエスマンで受け入れるのではなく、自力で変更する力もエンジニアには必要だなと感じました。
（アーキテクチャや受け入れ基準など曖昧な文章で作っていることもあります）

今後はAIを使いこなすためにも設計力が重要になってくるかもしれません！！

## GitHub

GitHubにコードを公開しています。

https://github.com/ryomeblog/todo-app

## GitHub Pages

記念としてGitHub Pagesにサイト公開しています。

現状（2025/7/17）のKiroでToDoリストを作成するとどのようなサイトになるのか参考にしてください。

https://ryomeblog.github.io/todo-app/
